import React from 'react';
import './Thumbnail.css';

const Thumbnail = props => {

    return (props.other === "none") ? (
        <img className={props.className} onClick={props.onClick} src={"https://img.youtube.com/vi/"+props.tag+"/maxresdefault.jpg"} alt={props.alt} />
    ) : (
        <img className={props.className} onClick={props.onClick} referrerPolicy="no-referrer" src={"https://f005.backblazeb2.com/file/PhotosSite/Thumbnails/"+props.other} alt={props.alt} />
    );
}

export default Thumbnail;