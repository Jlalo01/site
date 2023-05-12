import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Video from '../../components/Video/Video';
import './Shorts.css';

const Shorts = () =>{

    const [data, setData] = useState([]);
    //const [names, setNames] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get("https://joeylalo-site-back.onrender.com/shorts");
            setData(res.data);
        }
        fetchData();
    }, []);



    return(
        <div className='page_padding'>
            <div className='shorts_row'>
                {
                    data.map(short => (
                        <div className='short_block'>
                            <Video link={short.link} size='small' />
                            <div className='date'>{short.date}</div>
                            <div className='title'>{short.name}</div>
                            <Link className="more-info" to={"/shorts/" + short.tag}>
                                <div>More Info</div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}   


export default Shorts;