import React, { useEffect, useState } from "react";
import axios from 'axios';
import Video from "../../components/Video/Video";
//import data from './cinematics.json';
import './Cinematics.css';

const Cinematics = () =>{

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get("https://joeylalo-site-back.onrender.com/cine");
            setData(res.data);
        }   
        fetchData();
    }, []);



    return(
        <div className="page_padding">
            <table>
            {
                data.map(cinema => (
                    <tbody>
                    <tr>
                        <td><Video size='small' className="cine_video" link={cinema.link} /></td>
                        <td>
                            <div className="cine_title">{cinema.name}</div>
                            <div className="cine_info">{cinema.info}</div>
                            <div className="cine_info">Camera: {cinema.camera}</div>
                            <div className="cine_info">Lense: {cinema.lense}</div>
                        </td>
                    </tr>
                    </tbody>
                ))
            }
            </table>
        </div>
    );
}

export default Cinematics