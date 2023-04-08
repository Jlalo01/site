import React from "react";
import Video from "../../components/Video/Video";
import data from './docs.json';
import './Docs.css';

const Docs = () =>{

    const docs = [];
    for (let name in data){
        docs.push(name);
    }

    return(
        <div className="page_padding">
            <table>
            {
                docs.map(doc => (
                    <tr>
                        <td><Video size='small' className="doc_video" link={data[doc].link} /></td>
                        <td>
                            <div className="doc_title">{data[doc].name}</div>
                            <div className="doc_info">{data[doc].info}</div>
                        </td>
                    </tr>
                ))
            }
            </table>
        </div>
    );
}

export default Docs;