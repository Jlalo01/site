import React from 'react';
import Video from '../../components/Video/Video';
import './Home.css';

const Home = () => {

    return (
        <div className='page_padding'>
            <div className='home_title'>Latest Work</div>
            <Video link='https://www.youtube.com/embed/pJMBOc4qrXE' size='normal' />
            <div className='home_name'>Manchester: The Meet</div>
        </div>
    );
}

export default Home;