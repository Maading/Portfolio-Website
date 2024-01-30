/* Code_page.js */

import React from 'react';
import {NavBar_code} from './code/NavBar_code'
import {Footer_code} from './code/Footer_code'
import {Consuela_page} from '../components/code/Consuela_page';
import {Website_page} from '../components/code/Website_page';
import {Other_page} from '../components/code/Other_page';
import {
    BrowserRouter as  Router, Route, Routes, 
  } from "react-router-dom";


export  const Code_page = () => {

    return(
        <div>
            <NavBar_code />
            <Routes>    
                <Route path="/consuela" element={<Consuela_page />}  />
                <Route path="/website" element={<Website_page/>}  />
                <Route path="/projects" element={<Other_page/>}  />
            </Routes> 
            <Footer_code />
        </div>
    )
}