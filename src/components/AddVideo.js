// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import "./AddVideo.css";
import VideoDispatchContext from "../context/VideoDispatchContext";

const initialState = {
    title:"",
    views:"",
    channel: "Coding Ninjas",
    time: "3years Ago",
    verified: true,
}

export const AddVideo = ({editableVideo }) => {
  const [video, setVideo] = useState(initialState);

  const dispatch = useContext(VideoDispatchContext);

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      dispatch({type:'UPDATE',payload:video});
    }else{
      dispatch({type:'ADD',payload: video});
    }
    setVideo(initialState);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo);
    }
  },[editableVideo])

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Write video title here..."
          value={video.title}
        >
        </input>

        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="Write video views here..."
          value={video.views}
        >
        </input>
        <button onClick={handleSubmit}>{editableVideo?"Edit":"Add"} Video</button>
      </form>
    </div>
  );
};
