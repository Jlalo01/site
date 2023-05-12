import React, { useEffect, useState} from "react";
import axios from 'axios';
import Video from '../../components/Video/Video';
//import data from './shorts.json';
import './AShort.css';

const AShort = props => {

    const [data, setData] = useState([{name:""}]);

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get("https://joeylalo-site-back.onrender.com/shorts/"+props.id);
            setData(res.data[0]);
        }
        fetchData();
    }, [props.id]);


    return(
        <div className="page_padding">
            <div className="title_ashort">{data.name}</div>
            <Video link={data.link} size='normal' />
            <div className="synopsis_ashort">{data.synopsis}</div>
            <div className="info_ashort">Director: {data.director}</div>
            <div className="info_ashort">Writer: {data.writer}</div>
            <div className="info_ashort">Camera: {data.camera}</div>
            <div className="info_ashort">Editor: {data.editor}</div>
            <div className="info_ashort">Audio: {data.audio}</div>
            <div className="info_ashort">Cast: {data.cast}</div>
        </div>
    );
}

export default AShort;