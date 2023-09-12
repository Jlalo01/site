import React from 'react';
import './Thumbnail.css';

const Thumbnail = props => {

    return(
        <img className={props.className} onClick={props.onClick} src={"https://img.youtube.com/vi/"+props.tag+"/maxresdefault.jpg"} alt={props.alt} />
    );
}

export default Thumbnail;