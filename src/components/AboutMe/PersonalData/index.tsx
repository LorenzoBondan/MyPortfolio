import { AiFillHome } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { BsCalendarDateFill } from 'react-icons/bs';
import ucsLogo from 'assets/images/ucs.jpg';
import logoSagrado from 'assets/images/logo-sagrado.png';
import logoTodeschini from 'assets/images/todeschini.png';
import logoWeg from 'assets/images/weg.png';
import './styles.css';

function ageCalc(date: string | undefined){
    var miliseconds = date? new Date().getTime() - new Date(date).getTime() : new Date().getTime();
    var years = miliseconds / (31556952000);
    return Math.trunc(years).toString();
}

const PersonalData = () => {
    return(
        <>
        <div className='personal-container'>

            <div className='personal-data-container'>
                <h2>Personal Data</h2>
                <h4><i><AiFillHome/></i>  <span>Bento Gonçalves - RS</span></h4>
                <h4><i><AiFillPhone/></i>  <span>+55 54 99657-0555</span></h4>
                <h4><i><MdEmail/></i>  <span>Lbbondan@gmail.com</span></h4>
                <h4><i><BsCalendarDateFill/></i> Age - <span>{ageCalc("1999-07-17")}</span></h4>
            </div>

            <div className='education-and-experience-container'>

                <div className='education-container'>
                    <h2>Education</h2>
                    
                    <div className='college-container'>

                        <div className='college-card'>
                            <div className='college-card-img'>
                                <img src={ucsLogo} alt="UCS" />
                            </div>
                            <div className='college-card-content'>
                                <h4>Software Engineering</h4>
                                <h6>Current: 1/8</h6>
                            </div>
                        </div>

                        <div className='college-card'>
                            <div className='college-card-img'>
                                <img src={ucsLogo} alt="UCS" />
                            </div>
                            <div className='college-card-content'>
                                <h4>Mechanical Engineering</h4>
                                <h6>Current: 10/10</h6>
                            </div>
                        </div>

                        <div className='college-card'>
                            <div className='college-card-img'>
                                <img src={logoSagrado} className="marista" alt="UCS" />
                            </div>
                            <div className='college-card-content'>
                                <h4>High School</h4>
                            </div>
                        </div>

                        <div className='college-card'>
                            <div className='college-card-img'>
                                <img src="https://apps.colegiomarista.org.br/matricula/aparecida/library/midias/imagens/logotipo.png" className='marista' alt="UCS" />
                            </div>
                            <div className='college-card-content'>
                                <h4>Elementary School</h4>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='experience-container'>
                    <h2>Experience</h2>

                    <div className='professional-container'>
                        <div className='college-card'>
                            <div className='college-card-img'>
                                <img src={logoTodeschini} alt="UCS" />
                            </div>
                            <div className='college-card-content'>
                                <h4>Engineering Assistent</h4>
                                <h6>1 year and 3 months</h6>
                            </div>
                        </div>

                        <div className='college-card'>
                            <div className='college-card-img'>
                                <img src={logoWeg} alt="UCS" />
                            </div>
                            <div className='college-card-content'>
                                <h4>Engineering Trainee</h4>
                                <h6>6 months</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </>
    );
}

export default PersonalData;