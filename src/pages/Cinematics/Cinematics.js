import React, { useEffect, useState } from "react";
import axios from 'axios';
import Video from "../../components/Video/Video";
//import data from './cinematics.json';
import './Cinematics.css';

const Cinematics = () =>{

    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get("https://joeylalo-site-back.onrender.com/cine");
            setData(res.data);
        }   
        fetchData();
    }, []);


    let cine_names = [];
    for (let name in data){
        cine_names.push(name);
    }


    return(
        <div className="page_padding">
            <table>
            {
                cine_names.map(cinema => (
                    <tbody>
                    <tr>
                        <td><Video size='small' className="cine_video" link={data[cinema].link} /></td>
                        <td>
                            <div className="cine_title">{data[cinema].name}</div>
                            <div className="cine_info">{data[cinema].info}</div>
                            <div className="cine_info">Camera: {data[cinema].camera}</div>
                            <div className="cine_info">Lense: {data[cinema].lense}</div>
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