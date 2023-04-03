import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import Vfx from "./Vfx";
import './VfxPage.css';

const VfxPage = () =>{

    const id = useParams();
    return(
        <div className="vfx_page">
            <Header color="white" />
            <Vfx id={id} />
            <Footer />
        </div>
    );
}

export default VfxPage;