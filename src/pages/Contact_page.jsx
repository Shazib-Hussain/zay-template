import React from "react";
import Navbar from "../components/Navbar";
import Contact_Hero from "../components/Contact_Hero";
import Footer from "../components/Footer";
import Contact_Input from "../components/Contact_Input";

export default function Contact_Page(){
    return(
        <>
            <Navbar/>
            <Contact_Hero/>
            <Contact_Input/>
            <Footer/>
        </>
    )
}