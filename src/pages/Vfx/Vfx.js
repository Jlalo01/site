import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Video from "../../components/Video/Video";
//import data from './vfx.json';
import "./Vfx.css";

const Vfx = props =>{

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get("https://joeylalo-site-back.onrender.com/vfx");
            setData(res.data);
        }   
        fetchData();
    }, []);

    let on = props.id.id;



    return(
        <div className="page_padding">
            <div className="side-bar_setup">
                <div className="side-bar">
                    <Link className="nav_all" to={"/vfx/"}><div className="all-button_pad">All</div></Link>
                    <Link className="nav_buttons" to={"/vfx/superman"}><div className="button_pad">Superman</div></Link>
                    <Link className="nav_buttons" to={"/vfx/scarlet-witch"}><div className="button_pad">Scarlet Witch</div></Link>
                    <Link className="nav_buttons" to={"/vfx/the-flash"}><div className="button_pad">The Flash</div></Link>
                    <Link className="nav_buttons" to={"/vfx/quicksilver"}><div className="button_pad">Quicksilver</div></Link>
                    <Link className="nav_buttons" to={"/vfx/starwars"}><div className="button_pad">Star Wars</div></Link>
                    <Link className="nav_buttons" to={"/vfx/telekinesis"}><div className="button_pad">Telekinesis</div></Link>
                </div>
                <div className="rest">
                    <div className="video_setup">
                        {
                            data.map(video =>{
                                if (video.tags.includes(on) || on === undefined){
                                    return (
                                    <div className="video_table">
                                        <div className="video_block">
                                            <div className="video_title">{video.name}</div>
                                            <Video size='smaller' link={video.link} />
                                            <div className="video_info">{video.info}</div>
                                        </div>
                                    </div>
                                    )
                                }
                                else{return(<div></div>)}
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vfx;