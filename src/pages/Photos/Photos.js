import React, {useEffect, useState} from 'react';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import APhoto from '../../components/APhoto/APhoto';
import './Photos.css';

const Photos = () => {
    const server = "http://localhost:8000";
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
        console.log(cur_element.tag);
    }

    return (
        <div>
            <div className='all_photos_pad'>
                <div className='photos_container'>
                    {
                        data.map((element, i) =>{
                            return(
                                <div className='a_photo'>
                                    <img className='photo_fit' width={"100%"} height={"100%"} onClick={() => handleClick(element)} src={"https://drive.google.com/uc?export=view&id="+element.tag} alt={element.name} />
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