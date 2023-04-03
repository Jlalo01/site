import React from 'react';
import { Link } from 'react-router-dom';
import VideoSmall from '../../components/VideoSmall/VideoSmall';
import data from './shorts.json';
import './Shorts.css';

const Shorts = () =>{

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
                            <VideoSmall link={data[short].link} />
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