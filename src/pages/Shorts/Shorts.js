import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import Info from '../../components/Info/Info';
import './Shorts.css';

const Shorts = () =>{
    const server = "http://localhost:8000";
    const [data, setData] = useState([{tag:"NpEaa2P7qZI", name:"LOADING"}]);
    const [selection, setSelection] = useState({});
    const [trig, setTrig] = useState(false);

    useEffect(() =>{
        async function fetchData(){
            const res = await axios.get(server+"/video/ord-cat/Shorts")
            setData(res.data);
        }
        fetchData()
    }, [])

    function handleReturnTop(){
        window.scrollTo(0,0);
    }

    async function handleInfo(cur_tag){
        const res = await axios.get(server+"/video/tag/"+cur_tag);
        setSelection(res.data[0]);
        setTrig(true);
    }


    return(
        <div className='shorts_padding'>
            <div className='short_title'>Shorts</div>
            {
                data.map(video => {
                    return(
                        <div className='short_grid'>
                            <div className='short_video_thumb_pad'>
                                <Thumbnail onClick={() => handleInfo(video.tag)} className="short_video_thumb" tag={video.tag} alt={video.name} />
                            </div>
                        </div>
                    );
                })
            }
            <Info selection={selection} trigger={trig} back={setTrig} />
            <div className='return_to_top' onClick={handleReturnTop}>Return to Top</div>
        </div>
    );
}   


export default Shorts;