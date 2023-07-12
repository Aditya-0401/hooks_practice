// @ts-nocheck
import React, { useContext } from 'react'
import { Playbutton } from "../components/Playbutton";
import { Video } from "../components/Video";
import VideoContext from '../context/VideoContext';

export const Videolist = ({editVideo}) => {

  const videos = useContext(VideoContext);
  console.log(videos);
  return (
    <>
    {videos.map((video) => {
        return (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            channel={video.channel}
            time={video.channel}
            verified={video.verified}
            editVideo = {editVideo}
          >
            <Playbutton
              onPlay={() => console.log("Playing...",video.title)}
              onPause={() => console.log("Paused...",video.title)}
            >
              Play
            </Playbutton>
          </Video>
        );
      })}
    </>
  )
}
