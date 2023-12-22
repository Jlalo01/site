import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import './Play.css';

const Play = () =>{
    const server = "https://jlmyall.lat/joey"
    const navigate = useNavigate();
    const [video, setVideo] = useState({specs:[]});
    const { tag } = useParams();

    useEffect(()=>{
        async function fetchData(){
            const vid_res = await axios.get(server+"/video/tag/"+tag);
            setVideo(vid_res.data[0]);
        }
        fetchData();
    }, [tag]);

    function handleBack(){
        navigate(-1);
    }

    
    return (
        <div className='play_page'>
            <div className='play_video'>
                <iframe width={"100%"} height={"100%"} src={"https://www.youtube.com/embed/"+video.tag} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className='play_info_pad'>
                <div className='play_info_back' onClick={handleBack}>{"<Back"}</div>
                <div className='play_info_name'>{video.name}</div>
                <div className='play_info_info'>{video.info}</div>
                {
                    Object.keys(video.specs).map(element => (
                        <div className='play_info_specs'>{element+": "+video.specs[element]}</div>
                    ))
                }
            </div>
            <Footer />
        </div>
    );
}

export default Play;