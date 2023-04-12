import React, { useEffect, useState} from "react";
import axios from 'axios';
import Video from '../../components/Video/Video';
//import data from './shorts.json';
import './AShort.css';

const AShort = props => {

    const [id, setID] = useState("0")
    const [data, setData] = useState({"0":{name:""}});

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get("http://localhost:8000/shorts");
            setData(res.data);
            setID(props.id);
        }
        fetchData();
    }, []);


    return(
        <div className="page_padding">
            <div className="title_ashort">{data[id].name}</div>
            <Video link={data[id].link} size='normal' />
            <div className="synopsis_ashort">{data[id].synopsis}</div>
            <div className="info_ashort">Director: {data[id].director}</div>
            <div className="info_ashort">Writer: {data[id].writer}</div>
            <div className="info_ashort">Camera: {data[id].camera}</div>
            <div className="info_ashort">Editor: {data[id].editor}</div>
            <div className="info_ashort">Audio: {data[id].audio}</div>
            <div className="info_ashort">Cast: {data[id].cast}</div>
        </div>
    );
}

export default AShort;