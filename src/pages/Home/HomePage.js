import React from 'react';
import Home from './Home';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () =>{
    
    return (
        <div className='home_page'>
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default HomePage;