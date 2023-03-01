
import './styles.css';

const Footer = () => {
    return(
        <>
        <footer className="footer-container">
            <div className="footer-title">Follow Me</div>
                <div className="footer-items">
                    <a href="https://instagram.com/lorenzobondan"><img src="img/instagram.png" alt="instagram"></img></a>
                    <a href="https://www.youtube.com/channel/UCFHvKs41lSJMYCyMkRNbhfQ"><img src="img/youtube.png" alt="youtube"></img></a>
                </div>
        </footer>
        <div className='bottom-footer-container'>
            <p>2023 Copyrigth All Rights Reserved</p>
        </div>
        </>
    );
}

export default Footer;