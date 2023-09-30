import React, {useEffect, useState} from 'react';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import Video from '../../components/Video/Video';
import Info from '../../components/Info/Info';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import './Home.css';

const Home = () => {
    const server = "https://joeylalo-site-back.onrender.com";
    const navigate = useNavigate();
    const [slides, setSlides] = useState([{tag:"NpEaa2P7qZI", name:"LOADING"}]);
    const [onSlide, setOn] = useState(0);
    const [categories, setCategories] = useState([]);
    const [selection, setSelection] = useState({});
    const [trig, setTrig] = useState(false);
    
    useEffect(() =>{
        async function fetchData(){
            const cat_res = await axios.get(server+"/categories/random");
            const cats = [];
            cat_res.data.forEach(async element => {
                let cur_res = await axios.get(server+"/video/ord-cat/"+element.name);
                cats.push(cur_res.data)
            });
            setCategories(cats);
            const slide_res = await axios.get(server+"/slides");
            setSlides(slide_res.data);
        }
        fetchData();
    }, []);

    setTimeout(() => {
        if (onSlide+1 === slides.length){setOn(0);}
        else{setOn(onSlide+1);}
    },5000);

    async function handleInfo(cur_tag){
        const res = await axios.get(server+"/video/tag/"+cur_tag);
        console.log(cur_tag);
        setSelection(res.data[0]);
        setTrig(true);
    }

    function handleReturnTop(){
        window.scrollTo(0,0);
    }

    function handleSelectCat(cur_tag){
        window.scrollTo(0,0);
        navigate("/"+cur_tag);
    }


    return (
        <div>
            <div className='big_slide'>
                <div className='slide_name'>
                    <div className='slide_name_text'>{slides[onSlide].name}</div>
                </div>
                <Thumbnail className="slide_image" onClick={() => handleInfo(slides[onSlide].tag)} tag={slides[onSlide].tag} alt={slides[onSlide].tag} />
            </div>
            <div className='home_cat_pad'>
                {
                    categories.map(category => {
                        let count = 0;
                        return(
                            <div>
                                <div className='home_cat_name' onClick={() => handleSelectCat(category[0].category)}>{category[0].category}</div>
                                <div className='home_cat_container'>
                                    {
                                        category.map(video => {
                                            count = count+1;
                                            return (count <= 4) ? (
                                                <div className='home_videos_thumb_pad'>
                                                    <Thumbnail onClick={() => handleInfo(video.tag)} className="home_videos_thumb" tag={video.tag} alt={video.name} />
                                                </div>
                                            ):"";
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <Info selection={selection} trigger={trig} back={setTrig} />
            <div className='return_to_top' onClick={handleReturnTop}>Return to Top</div>
        </div>
    );
}

export default Home;