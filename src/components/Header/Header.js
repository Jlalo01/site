import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';


const Header = props => {

    const navigate = useNavigate();

    function toHome(){
        navigate('/');
    }
    
    function toShorts(){
        navigate('/shorts');
    }

    function toCinematics(){
        navigate('/cinematics');
    }

    function toDocs(){
        navigate('/docs');
    }

    function toMusic(){
        navigate('/wip');
    }

    function toVFX(){
        navigate('/vfx');
    }

    function toAnimation(){
        navigate('/wip');
    }

    function toProgramming(){
        navigate('/wip');
    }

    const c = props.color;

    return(
        <div className="header_padding">
            <div className="home-button" style={{color:c}} onClick={toHome}>Joey Lalo</div>
            <div className='nav-button' style={{color:c}} onClick={toProgramming}>Programming</div>
            <div className='nav-button' style={{color:c}} onClick={toAnimation}>Animation</div>
            <div className='nav-button' style={{color:c}} onClick={toVFX}>VFX</div>
            <div className='nav-button' style={{color:c}} onClick={toMusic}>Music Videos</div>
            <div className='nav-button' style={{color:c}} onClick={toDocs}>Documentaries</div>
            <div className='nav-button' style={{color:c}} onClick={toCinematics}>Cinematics</div>
            <div className='nav-button' style={{color:c}} onClick={toShorts}>Short Films</div>    
        </div>
    );
}

export default Header;