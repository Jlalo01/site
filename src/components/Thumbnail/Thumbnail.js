import React from 'react';
import './Thumbnail.css';

const Thumbnail = props => {

    return (props.other === "none") ? (
        <img className={props.className} onClick={props.onClick} src={"https://img.youtube.com/vi/"+props.tag+"/maxresdefault.jpg"} alt={props.alt} />
    ) : (
        <img className={props.className} onClick={props.onClick} src={"https://drive.google.com/uc?export=view&id="+props.other} alt={props.alt} />
    );
}

export default Thumbnail;