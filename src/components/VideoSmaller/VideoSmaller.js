import React from "react";
import './VideoSmaller.css';

const VideoSmaller = props =>{

    const w = window.innerWidth * 0.8 * 0.40;
    const h = w*9/16;

    return(
        <div className={props.className}>
            <iframe width={w} height={h} src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
}

export default VideoSmaller;