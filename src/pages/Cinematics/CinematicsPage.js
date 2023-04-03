import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Cinematics from './Cinematics';
import './CinematicsPage.css';

const CinematicsPage = () =>{


    return (
        <div className='cinematics_page'>
            <Header />
            <Cinematics />
            <Footer />
        </div>
    );
}

export default CinematicsPage