import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Video from '../../components/Video/Video';
import './Shorts.css';

const Shorts = () =>{

    const [data, setData] = useState({});
    //const [names, setNames] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const res = await axios.get("http://localhost:8000/shorts");
            setData(res.data);
        }
        fetchData();
    }, []);

    let short_names = [];
    for (let name in data){
        short_names.push(name);
    }
    


    return(
        <div className='page_padding'>
            <div className='shorts_row'>
                {
                    short_names.map(short => (
                        <div className='short_block'>
                            <Video link={data[short].link} size='small' />
                            <div className='date'>{data[short].date}</div>
                            <div className='title'>{data[short].name}</div>
                            <Link className="more-info" to={"/shorts/" + short}>
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