import React from "react";
import './VideoSmall.css';

const VideoSmall = props =>{

    const w = window.innerWidth * 0.8 * 0.45;
    const h = w*9/16;

    console.log(window.innerWidth);

    return(
        <div className={props.className}>
            <iframe width={w} height={h} src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
}

export default VideoSmall;