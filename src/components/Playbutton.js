import React, { useState } from 'react'
import "./Playbutton.css";
 
export const Playbutton = ({children,onPlay,onPause}) => {
  
    const [playing,setPlaying] = useState(false);
  function handleClick(e){
    e.preventDefault();

    if(playing){
        onPause();
    }
    else onPlay();
    setPlaying(!playing);
  }

  return (
    <button onClick={handleClick}>
        {children} : {playing ? "||": ">"}
    </button>
  )
}
