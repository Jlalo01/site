import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Video from '../../components/Video/Video';
import './Home.css';

const Home = () => {

    const [data, setData] = useState({link:"https://www.youtube.com/embed/NpEaa2P7qZI", name:"PLACE HOLDER"});
    
    useEffect(() =>{
        async function fetchData(){
            const res = await axios.get("http://localhost:8000/home");
            setData(res.data);
        }
        fetchData();
    }, []);

    console.log(data);

    return (
        <div className='page_padding'>
            <div className='home_title'>Latest Work</div>
            <Video link={data.link} size='normal' />
            <div className='home_name'>{data.name}</div>
        </div>
    );
}

export default Home;