import React, { useEffect, useState }from "react";
import axios from "axios";
import "./Programming.css";


const Programming = () =>{

    const [data, setData] = useState([]);
    
    useEffect(() =>{
        async function fetchData(){
            const res = await axios.get("https://joeylalo-site-back.onrender.com/prog");
            setData(res.data);
        }
        fetchData();
    },[])

    return(
        <div className="prog_pad">
            {
                data.map((proj, i) =>{
                    if (i+1 === data.length){
                        return(
                            <div className="all_proj">
                                <div className="proj_name">{proj.name}</div>
                                <div className="langmods"><div className="langmodsB">Languages and Modules: </div> {proj.langs}</div>
                                <div className="proj_info"><div className="proj_infoB">Description: </div> {proj.info}</div>
                                <div className="proj_infoB">Links:</div>
                                {
                                    proj.links.map(link => (
                                        <a className="proj_link" href={link}><br/>{link}</a>
                                    ))
                                }
                            </div>
                            );
                    }
                    return(
                        <div className="all_proj">
                            <div className="proj_name">{proj.name}</div>
                            <div className="langmods"><div className="langmodsB">Languages and Modules: </div> {proj.langs}</div>
                            <div className="proj_info"><div className="proj_infoB">Description: </div> {proj.info}</div>
                            <div className="proj_infoB">Links:</div>
                            {
                                proj.links.map(link => (
                                    <a className="proj_link" href={link}><br/>{link}</a>
                                ))
                            }
                            <br/><br/>
                            <hr color="black"/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Programming;