import React from "react";
import './Video.css';

const Video = props =>{

    const size = "video_" + props.size;

    return(
        <div className={size}>
            <iframe width={"100%"} height={"100%"} src={props.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
}

export default Video;