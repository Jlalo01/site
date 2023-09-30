import React from 'react';
import Category from './Category';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './CategoryPage.css';

const CategoryPage = () =>{

    return(        
    <div className='shorts_page'>
        <Header />
        <Category />
        <Footer />
    </div>
    );

}

export default CategoryPage;