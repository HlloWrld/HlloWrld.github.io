import './App.scss';
import parallax1 from './images/parallax_0000_1.png'
import parallax2 from './images/parallax_0001_2.png'
import parallax3 from './images/parallax_0002_3.png'
import parallax4 from './images/parallax_0003_4.png'
import parallax5 from './images/parallax_0004_5.png'
import parallax6 from './images/parallax_0005_6.png'
import parallax7 from './images/parallax_0006_7.png'
import parallax8 from './images/parallax_0007_8.png'
import parallax9 from './images/parallax_0008_9.png'
import parallax10 from './images/parallax_0009_10.png'
import parallax11 from './images/parallax_0010_11.png'
import parallax12 from './images/parallax_0011_12.png'

import NavBar from './components/NavBar'
import Projects from './components/Projects';
import About from './components/About';
import HlloTitle from './components/HlloTitle';
import BottomNav from './components/BottomNav';

import React, { useState, useEffect } from "react";
import { useRef } from "react";



function App() {

  const projects = useRef(null);
  const about = useRef(null);
  const hllo = useRef(null);

  const handleClickProjects = () => {
    projects.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickAbout = () => {
    about.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickHllo = () => {
    hllo.current?.scrollIntoView({top: 0, behavior: 'smooth'});
  };

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };
  

  return (
    <div className="App">
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
          
        {/* NavBar */}
          <nav id='navbar' className="NavBar">
            <div onClick={handleClickHllo} className="site-title">HlloWrld.</div>
            <ul className={'navItems'}>
                <li  className={'navItem'}>
                  <div onClick={handleClickAbout}>About</div>
                </li>
                <li  className={'navItem'}>
                  <div onClick={handleClickProjects}>Projects</div>
                </li>
                
            </ul>
          </nav>

      <div className="wrapper">

        {/* Parallax Header */}
        <header className={'App-header'}>
          <img src={parallax1} className={'parallax1'} alt=""/>
          <img src={parallax2} className={'parallax2'} alt=""/>
          <img src={parallax3} className={'parallax3'} alt=""/>
          <img src={parallax4} className={'parallax4'} alt=""/>
          <img src={parallax5} className={'parallax5'} alt=""/>
          <img src={parallax6} className={'parallax6'} alt=""/>
          <img src={parallax7} className={'parallax7'} alt=""/>
          <img src={parallax8} className={'parallax8'} alt=""/>
          <img src={parallax9} className={'parallax9'} alt=""/>
          <img src={parallax10} className={'parallax10'} alt=""/>
          <img src={parallax11} className={'parallax11'} alt=""/>
          <img src={parallax12} className={'parallax12'} alt=""/>
          <div  ref={hllo} className={'title'}>
            <HlloTitle></HlloTitle>
          </div>
        </header>

      
        {/* Content */}
        <div className={'section'}>
   
            <div ref={about} className={'about'}>
              <div className={'internalWrapper'}>
                <About></About>
              </div>
            </div>
            <hr></hr>
            <div ref={projects} className={'projects'}>
              <div className={'internalWrapper'}>
                <Projects></Projects>
              </div>
            </div>

          <hr></hr>
            <BottomNav></BottomNav>
 
          
        </div>

      </div>
    </div>
  );
}

export default App;
