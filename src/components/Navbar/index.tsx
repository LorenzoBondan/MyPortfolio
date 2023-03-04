import { CSSProperties, FC, useState } from 'react';

import portfolioIcon from 'assets/images/portfolioIcon.png';
import linkedinIcon from 'assets/images/linkedin.svg';
import instagramIcon from 'assets/images/instagram.svg';
import facebookIcon from 'assets/images/facebook.svg';
import githubIcon from 'assets/images/github.svg';

import './styles.css';

interface NavbarProps {
    styles: CSSProperties;
}

const Navbar : FC<NavbarProps> = ({ styles }) => {

    const [activeLink, setActiveLink] = useState('home');
    
    const [isSticky, setIsSticky] = useState(false);
      
    const handleScroll = () => {
        const offset = window.scrollY;
      
          if (offset > 0 && !isSticky) {
            setIsSticky(true);
          } else if (offset === 0 && isSticky) {
            setIsSticky(false);
          }
    };
      
    window.addEventListener('scroll', handleScroll);

    const onUpdateActiveLink = (value : any) => {
        setActiveLink(value);
    }

    return(
        <nav className="navbar navbar-expand-md navbar-container navbar-md" style={isSticky ? { ...styles, position: 'fixed', top: 0 } : styles}>
            <div className='container-fluid'>
                <div className='navbar-brand'>
                    <a href="/">
                        <i className='navbar-brand-icon'><img src={portfolioIcon} alt="" /></i>
                        Lorenzo Bondan Portfolio
                    </a>
                </div>
                <div className="navbar-menu-items-container">
                    <ul className="navbar-nav offset-md-2 main-menu">
                        <li><a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</a></li>
                        <li><a href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</a></li>
                        <li><a href="#aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>About Me</a></li>
                        <li><a href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</a></li>
                        <li><a href="#courses" className={activeLink === 'courses' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('courses')}>Courses</a></li>
                    </ul>
                </div>
                <div className='navbar-social-content-container'>
                    <a href="https://linkedin.com"><img src={linkedinIcon} alt="" /></a>
                    <a href="https://instagram.com/lorenzobondan"><img src={instagramIcon} alt="" /></a>
                    <a href="https://facebook.com/loreenzo_bondaan"><img src={facebookIcon} alt="" /></a>
                    <a href="https://github.com/LorenzoBondan"><img src={githubIcon} alt="" /></a>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;