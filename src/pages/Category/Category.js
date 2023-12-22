import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import Info from '../../components/Info/Info';
import './Category.css';

const Category = () =>{
    const server = "https://jlmyall.lat/joey";
    const [data, setData] = useState([{tag:"NpEaa2P7qZI", name:"LOADING"}]);
    const [selection, setSelection] = useState({});
    const [trig, setTrig] = useState(false);
    const { category } = useParams();

    useEffect(() =>{
        async function fetchData(){
            const res = await axios.get(server+"/video/ord-cat/"+category);
            setData(res.data);
        }
        fetchData()
    }, [category])

    function handleReturnTop(){
        window.scrollTo(0,0);
    }

    async function handleInfo(cur_tag){
        const res = await axios.get(server+"/video/tag/"+cur_tag);
        setSelection(res.data[0]);
        setTrig(true);
    }


    return(
        <div>
        <div className='shorts_padding'>
            <div className='short_title'>{category}</div>
            {
                data.map(video => {
                    return(
                        <div className='short_grid'>
                            <div className='short_video_thumb_pad'>
                                <Thumbnail onClick={() => handleInfo(video.tag)} className="short_video_thumb"  other={video.alt} tag={video.tag} alt={video.name} />
                            </div>
                        </div>
                    );
                })
            }
            <Info selection={selection} trigger={trig} back={setTrig} />
        </div>
            <div className='return_to_top' onClick={handleReturnTop}>Return to Top</div>
        </div>
    );
}   


export default Category;