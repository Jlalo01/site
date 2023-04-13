import React, { useEffect, useState } from "react";
import axios from 'axios';
import Video from "../../components/Video/Video";
//import data from './docs.json';
import './Docs.css';

const Docs = () =>{

    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get("https://joeylalo-site-back.onrender.com/docs");
            setData(res.data);
        }   
        fetchData();
    }, []);

    const docs = [];
    for (let name in data){
        docs.push(name);
    }

    return(
        <div className="page_padding">
            <table>
            {
                docs.map(doc => (
                    <tbody>
                    <tr>
                        <td><Video size='small' className="doc_video" link={data[doc].link} /></td>
                        <td>
                            <div className="doc_title">{data[doc].name}</div>
                            <div className="doc_info">{data[doc].info}</div>
                        </td>
                    </tr>
                    </tbody>
                ))
            }
            </table>
        </div>
    );
}

export default Docs;