import './NavBar.css';

import { useRef } from "react";

export default function Navbar() {
       
    const about = useRef(null);
    const projects = useRef(null);

    const scrollToSection = (elementRef) => (
        window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
        })
    )

    return(
    <nav id='navbar' className="NavBar">
        <a href="/" className="site-title">HlloWrld.</a>
        <ul>
            <li onClick={() => scrollToSection(about)} className={'navItem'}>
                <a href="/about" >About</a>
            </li>
            <li onClick={() => scrollToSection(projects)} className={'navItem'}>
                <a href="/projects" >Projects</a>
            </li>
        </ul>
    </nav>
    )
}