
import { useEffect, useState } from 'react';
import './styles.css';

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

    return(
        <div className='banner-container'>
            
            <div className='banner-img-container base-card'>
                <img src="https://i.ibb.co/KwJyNfM/lorenzo.jpg" alt="" />
            </div>

            <div className='banner-content-container'>
                <h1>Hello! Welcome to my portfolio</h1>
                
                <h2>{`I'm fullstack developer | `}<span className='wrap'>{text}</span></h2>

                <p>
                    My name is Lorenzo Bondan, I'm software engineering student and mechanical engineer.<br/>
                    I'm looking for my first experience as developer, and here, I build a resume of myself.<br/>
                    Help yourself to take a look!
                </p>

                <button className='btn btn-primary' onClick={() => console.log('connect')}>Contact Me</button>
            </div>

        </div>
    );
}

export default Banner;