import React from 'react';
import { useParams } from 'react-router-dom';
import Shorts from './Shorts';
import AShort from './AShort';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ShortsPage.css';

const ShortsPage = () =>{

    const { id } = useParams();

    if (id === undefined){
        return(        
        <div className='shorts_page'>
            <Header color="white" />
            <Shorts />
            <Footer />
        </div>
        );
    }
    else{
        return(
            <div className='shorts_page'>
                <Header color="white" />
                <AShort id={id}/>
                <Footer />
            </div>
        );
    }

}

export default ShortsPage;