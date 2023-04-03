import React from "react";
import './Video.css';

const Video = props =>{

    const w = window.innerWidth * 0.8;
    const h = w*9/16;

    return(
        <div>
            <iframe width={w} height={h} src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
}

export default Video;