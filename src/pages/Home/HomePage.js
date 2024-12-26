import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () =>{
    const navigate = useNavigate();
    navigate('mirumproductions.com', { replace: true });
    return (
        <div className='home_page'>
            <Footer />
        </div>
    );
}

export default HomePage;
