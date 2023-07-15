import { useEffect, useState } from 'react';
import './styles.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import CardLoader from 'components/CardLoader';
import { AiFillHome } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { BsCalendarDateFill } from 'react-icons/bs';

const PDF_FILE_URL = "https://lorenzobondanportfolio.vercel.app/LorenzoBondan_CV.pdf";

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Frontend", "Backend"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100); // tempo de animação de escrever
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delta, text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1);
        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if ( isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    const downloadCVFile = (url: any) => {
        fetch(url).then(response => response.blob())
            .then(blob => {
                const blobURL = window.URL.createObjectURL(new Blob([blob]))
                const fileName = url.split("/").pop();
                const aTag = document.createElement('a');
                aTag.href = blobURL;
                aTag.setAttribute('download', fileName);
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            });
    };

    const [imageLoaded, setImageLoaded] = useState(false);

      useEffect(() => {
        const img = new Image();
        img.src = "https://i.ibb.co/FDgZNXV/lorenzooficial.png";
        img.onload = () => {
          setImageLoaded(true);
        };
      }, []);

      function ageCalc(date: string | undefined) {
        var miliseconds = date
          ? new Date().getTime() - new Date(date).getTime()
          : new Date().getTime();
        var years = miliseconds / 31556952000;
        return Math.trunc(years).toString();
      }

    return(
        <div className='banner-container' id='home'>
            <div className='banner-first-container'>
                <div className='banner-img-container'>
                    {!imageLoaded ? (
                        <div><CardLoader/></div>
                    ) : (
                        <img src="https://i.ibb.co/FDgZNXV/lorenzooficial.png" alt=""/>
                    )}
                </div>
                <span className='home-separator'></span>
                <div className="personal-data-container">   
                    <h4>
                        <i>
                        <MdEmail />
                        </i>
                        <span>Lbbondan@gmail.com</span>
                    </h4>
                    <h4>
                        <i>
                        <AiFillPhone />
                        </i>
                        <span>+55 54 99657-0555</span>
                    </h4>

                    <h4>
                        <i>
                        <AiFillHome />
                        </i>
                        <span>Bento Gonçalves - RS</span>
                    </h4>
                    <h4>
                        <i>
                        <BsCalendarDateFill />
                        </i>
                        <span>{ageCalc('1999-07-17')} years old</span>
                    </h4>
                </div>
            </div>
            <div className='banner-content-container'>
                <h1>Hello! Welcome to my portfolio</h1>
                <h2>{`I'm fullstack developer | `}<span className='wrap'>{text}</span></h2>
                <p>
                    My name is Lorenzo Bondan, I'm software engineering student and mechanical engineer.<br/>
                    I am passionate about technology, especially web application development, and here I have built a summary about myself.<br/>
                    Help yourself to take a look!
                </p>
                <div style={{marginLeft:"0px"}}>
                <TrackVisibility>
                    {({ isVisible }) => (
                        <div className={isVisible ? 'animate__animated animate__bounce banner-button-zone' : 'banner-button-zone'}>
                            <button 
                                className='btn btn-primary content-button' 
                                onClick={() => {downloadCVFile(PDF_FILE_URL)}}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Download PDF CV
                            </button>
                        </div>
                    )}    
                </TrackVisibility>
                </div>
            </div>
        </div>
    );
}

export default Banner;