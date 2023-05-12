import React from "react";
import Programming from "./Programming";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProgrammingPage.css";

const ProgrammingPage = () =>{

    return(
        <div className="prog_page">
            <Header />
            <Programming />
            <Footer />
        </div>
    );
}

export default ProgrammingPage;