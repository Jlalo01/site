import React from "react";
import { useNavigate } from "react-router-dom";
import Video from '../../components/Video/Video';
import data from './shorts.json';
import './AShort.css';

const AShort = props => {

    const navigate = useNavigate();

    if (data[props.id] === undefined) {
        navigate('/shorts');
    }

    
    return(
        <div className="page_padding">
            <div className="title_ashort">{data[props.id].name}</div>
            <Video link={data[props.id].link} size='normal' />
            <div className="synopsis_ashort">{data[props.id].synopsis}</div>
            <div className="info_ashort">Director: {data[props.id].director}</div>
            <div className="info_ashort">Writer: {data[props.id].writer}</div>
            <div className="info_ashort">Camera: {data[props.id].camera}</div>
            <div className="info_ashort">Editor: {data[props.id].editor}</div>
            <div className="info_ashort">Audio: {data[props.id].audio}</div>
            <div className="info_ashort">Cast: {data[props.id].cast}</div>
        </div>
    );
}

export default AShort;