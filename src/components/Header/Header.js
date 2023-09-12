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

    function handle_home(){
        navigate("/");
    }

    function handle_shorts(){
        navigate("/shorts");
    }

    return(
        <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
            <div className="logo">
                <img onClick={handle_home} src="Logo.png" alt="Logo" />
            </div>
            <div className="nav-links">
                <div className="nav-link" onClick={handle_shorts}>Shorts</div>
                <div className="nav-link">Link 2</div>
                <div className="nav-link">Link 3</div>
                <div className="nav-link">Link 4</div>
            </div>
        </nav>
    );
}

export default Header;