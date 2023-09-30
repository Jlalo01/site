import React from 'react';
import Photos from './Photos';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './PhotosPage.css';

const PhotosPage = () =>{
    
    return (
        <div className='home_page'>
            <Header />
            <Photos />
            <Footer />
        </div>
    );
}

export default PhotosPage;