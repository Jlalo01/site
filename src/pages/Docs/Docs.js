import React, { useEffect, useState } from "react";
import axios from 'axios';
import Video from "../../components/Video/Video";
//import data from './docs.json';
import './Docs.css';

const Docs = () =>{

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get("https://joeylalo-site-back.onrender.com/docs");
            setData(res.data);
        }   
        fetchData();
    }, []);


    return(
        <div className="page_padding">
            <table>
            {
                data.map(doc => (
                    <tbody>
                    <tr>
                        <td><Video size='small' className="doc_video" link={doc.link} /></td>
                        <td>
                            <div className="doc_title">{doc.name}</div>
                            <div className="doc_info">{doc.info}</div>
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