import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Docs from "./Docs";
import './DocsPage.css';

const DocsPage = () =>{

    return (
        <div className="docs_page">
            <Header color="#06070d" />
            <Docs />
            <Footer />
        </div>
    );
}

export default DocsPage;