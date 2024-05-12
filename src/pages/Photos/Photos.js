import React, {useEffect, useState} from 'react';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import APhoto from '../../components/APhoto/APhoto';
import './Photos.css';

const Photos = () => {
    const server = "https://jlmyall.lat/joey";
    //const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [selection, setSelection] = useState("");
    const [trig, setTrig] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get(server+"/photos-ord");
            setData(res.data);
        }
        fetchData();
    }, []);

    function handleClick(cur_element){
        setSelection(cur_element);
        setTrig(true);
        window.scrollTo(0,0);
    }

    return (
        <div>
            <div className='all_photos_pad'>
                <div className='photos_container'>
                    {
                        data.map((element, i) =>{
                            if (element.name === "break"){
                                return(
                                <div className='a_photo'>
                                    <div className='photo_fit' />
                                </div>
                                );
                            }
                            return(
                                <div className='a_photo'>
                                    <img className='photo_fit' width={"100%"} height={"100%"} onClick={() => handleClick(element)} referrerPolicy="no-referrer" src={"https://f005.backblazeb2.com/file/PhotosSite/Site+Display/"+element.tag} alt={element.name} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <APhoto trigger={trig} selection={selection} back={setTrig} />
        </div>
    );
}

export default Photos;