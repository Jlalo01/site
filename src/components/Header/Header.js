import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';


const Header = props => {
    const navigate = useNavigate();
    const [scrolling, setScrolling] = useState(false);

  // Add an event listener to detect scroll position
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY >= 50) {
            setScrolling(true);
        } else {
        setScrolling(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleHome(){
        navigate("/");
    }

    function handleShorts(){
        navigate("/Shorts");
    }

    function handleCinematics(){
        navigate("/Cinematics");
    }

    function handleWIP(){
        navigate("/wip");
    }

    return(
        <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
            <div className="logo">
                <img onClick={handleHome} src="Logo.png" alt="Logo" />
            </div>
            <div className="nav-links">
                <div className="nav-link" onClick={handleShorts}>Shorts</div>
                <div className="nav-link" onClick={handleCinematics}>Cinematics</div>
                <div className="nav-link" onClick={handleWIP}>Photography</div>
                <div className="nav-link">Programming</div>
            </div>
        </nav>
    );
}

export default Header;