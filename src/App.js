// @ts-nocheck
import React, { useReducer, useState } from "react";
import "./App.css";
import videoDB from "./data/data";
import { AddVideo } from "./components/AddVideo";
import { Videolist } from "./components/Videolist";
import VideoContext from "./context/VideoContext";
import VideoDispatchContext from "./context/VideoDispatchContext";

// useRef renedering nahi karata hai


function App() {
  const[editableVideo,setEditableVideo] = useState(null)

  // reducer function takes previous state as input and return newstate as output
  function videoReducer(videos,action){
    switch(action.type){
      case 'ADD':
        return [
          ...videos,
          {...action.payload,id:videos.length+1}
        ]
      case 'DELETE':
        return videos.filter(video=>video.id!==action.payload)
      case 'UPDATE':
        const index = videos.findIndex(v=>v.id===action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index,1,action.payload);
        setEditableVideo(null)
        return newVideos
      default:
        return videos;
    }
  }
      
  const [videos,dispatch] = useReducer(videoReducer,videoDB);

  function editVideo(id){
    setEditableVideo(videos.find(v=>v.id===id))
  }

  return (
    <div className="App">
      <VideoContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <AddVideo editableVideo={editableVideo}/>
          <Videolist editVideo={editVideo}/>
          <div style={{ clear: "both" }}></div>
        </VideoDispatchContext.Provider>
      </VideoContext.Provider>
    </div>
  );
}

export default App;
