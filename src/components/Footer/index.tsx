import linkedinIcon from 'assets/images/linkedin.svg';
import instagramIcon from 'assets/images/instagram.svg';
import facebookIcon from 'assets/images/facebook.svg';
import githubIcon from 'assets/images/github.svg';

import './styles.css';

const Footer = () => {
    return(
        <>
        <footer className="footer-container">
            <div className="footer-title">Follow Me</div>
            <div className='footer-social-content-container' style={{marginRight:"0px"}}>
                    <a href="https://linkedin.com"><img src={linkedinIcon} alt="" /></a>
                    <a href="https://instagram.com/lorenzobondan"><img src={instagramIcon} alt="" /></a>
                    <a href="https://facebook.com/loreenzo_bondaan"><img src={facebookIcon} alt="" /></a>
                    <a href="https://github.com/LorenzoBondan"><img src={githubIcon} alt="" /></a>
                </div>
        </footer>
        <div className='bottom-footer-container'>
            <p>2023 © Copyrigth All Rights Reserved</p>
        </div>
        </>
    );
}

export default Footer;