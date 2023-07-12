// @ts-nocheck
import React, { useContext } from 'react'
import "./Video.css"
import VideoDispatchContext from '../context/VideoDispatchContext';

export const Video = ({title,channel="Coding Titans",views,time,verified,id,children,editVideo}) => {

  const dispatch = useContext(VideoDispatchContext);

  return (
    <>
    <div className="container">
      <button className="close" onClick={()=>dispatch({type:'DELETE',payload:id})}>X</button>
      <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
        <div className="pic">
            <img src={`https://picsum.photos/id/${id}/160/90`} alt="react tutorial"/>
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {verified && '✅'}</div>
        <div className="views">
            {views} views <span>.</span>{time}
        </div>
        <div>
          {children}
        </div>
    </div>
    </>

  )
}
