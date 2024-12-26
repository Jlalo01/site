import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () =>{
    const navigate = useNavigate();
    useEffect(() => {
        console.log("hello there");
        navigate("https://www.mirumproductions.com/", {replace: true});
    },[])
    return (
        <div className='home_page'>
            <Footer />
        </div>
    );
}

export default HomePage;
