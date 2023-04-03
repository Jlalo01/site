import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import wip from "./Wip.png";
import './WIP.css';

const WIP = () =>{

    return(
        <div>
            <Header color="#06070d" />
            <div className="page_padding">
                <img className="wip_image" src={wip} alt="WIP" />
            </div>
            <Footer />
        </div>
    );
}

export default WIP;