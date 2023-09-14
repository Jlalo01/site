import React from 'react';
import Shorts from './Shorts';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ShortsPage.css';

const ShortsPage = () =>{

    return(        
    <div className='shorts_page'>
        <Header />
        <Shorts />
        <Footer />
    </div>
    );

}

export default ShortsPage;