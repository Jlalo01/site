import React from "react";
import VideoSmall from "../../components/VideoSmall/VideoSmall";
import data from './cinematics.json';
import './Cinematics.css';

const Cinematics = () =>{

    let names = [];
    for (let name in data){
        names.push(name);
    }


    return(
        <div className="page_padding">
            <table>
            {
                names.map(cinema => (
                    <tr>
                        <td><VideoSmall className="cine_video" link={data[cinema].link} /></td>
                        <td>
                            <div className="cine_title">{data[cinema].name}</div>
                            <div className="cine_info">{data[cinema].info}</div>
                            <div className="cine_info">Camera: {data[cinema].camera}</div>
                            <div className="cine_info">Lense: {data[cinema].lense}</div>
                        </td>
                    </tr>
                ))
            }
            </table>
        </div>
    );
}

export default Cinematics