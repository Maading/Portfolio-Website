// components home.js
import React from 'react';
import { NavBar } from "./home/NavBar";
import { Banner } from "./home/Banner";
import { Projects } from "./home/Projects";
import { Contact } from "./home/Contact";
import { Footer } from "./home/Footer";
import { AboutMe } from './home/AboutMe';

export  const Home = () => {

    return(

        <div>
            <NavBar />
            <Banner />
            <Projects />
            <AboutMe />
            <Contact />
            <Footer />
        </div>
    )
}