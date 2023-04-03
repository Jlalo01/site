import React from 'react';
import './Footer.css';

const Footer = () =>{

    return(
        <div className="footer_padding">
            <div className='columns'>
                <div className='info-column'>
                    <div className='info_title'>Social Media</div>
                    <a className='info_link' href="https://www.instagram.com/mirumproductions/?hl=en">Instagram</a>
                    <br />
                    <div className='info_padding' />
                    <a className='info_link' href="https://www.linkedin.com/in/joey-lalo-262570207/">Linkedin</a>
                    <br />
                    <div className="info_padding" />
                    <a className='info_link' href="https://www.youtube.com/channel/UCxyEv1X_5l0SHZersii00Eg">Youtube</a>
                </div>
                <div className='info-column'>
                    <div className='info_title'>Contact</div>
                    <div className='info_else'>Email: mirumprod@gmail.com</div>
                    <div className='info_padding' />
                    <div className='info_else'>Phone #: +1 202-664-2098</div>
                </div>
                <div className='info-column'>
                    <div className='info-name_title'>Joey Lalo</div>
                    <div className='info_else'>Website Developed by Joey Lalo</div>
                </div>
            </div>
        </div>
    );
}

export default Footer