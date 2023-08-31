import ucsLogo from 'assets/images/ucs.jpg';
import logoSagrado from 'assets/images/logo-sagrado.png';
import logoTodeschini from 'assets/images/todeschini.png';
import logoWeg from 'assets/images/weg.png';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import cnaLogo from 'assets/images/cna-logo.jpg';
import star from 'assets/images/star.png';
import metawayLogo from 'assets/images/metaway-logo.jpg';
import carrerTransitionLogo from 'assets/images/carrer-transition-logo.jpeg';
import './styles.css';

const PersonalData = () => {
  return (
      <div className="personal-container" id="aboutMe">
            <div className="education-and-experience-container">
              <div className="languages-container">
                <h2>Languages</h2>
                <span className='separator'></span>
                <h4>
                  <i>
                    <img
                      src="https://em-content.zobj.net/thumbs/120/apple/325/flag-united-kingdom_1f1ec-1f1e7.png"
                      alt=""
                      style={{ height: '25px', marginRight: '8px' }}
                    />
                  </i>
                  Advanced
                </h4>
                <h4>
                  <i>
                    <img
                      src="https://em-content.zobj.net/thumbs/120/apple/325/flag-spain_1f1ea-1f1f8.png"
                      alt=""
                      style={{ height: '25px', marginRight: '8px' }}
                    />
                  </i>
                  Intermediate
                </h4>
                <h4>
                  <i>
                    <img
                      src="https://em-content.zobj.net/thumbs/120/apple/325/flag-brazil_1f1e7-1f1f7.png"
                      alt=""
                      style={{ height: '25px', marginRight: '8px' }}
                    />
                  </i>
                  Native
                </h4>
                <span className='separator'></span>
                <h6>                  <i>
                    <img
                      src="https://em-content.zobj.net/thumbs/120/apple/325/flag-united-kingdom_1f1ec-1f1e7.png"
                      alt=""
                      style={{ height: '25px', marginRight: '8px' }}
                    />
                  </i>
                  Cambridge Linguaskill Test
                </h6>
                <p className='linguaskill-score'>
                  <img src={star} alt="" />
                  Speaking: <strong style={{marginLeft:"4px"}}>180/180</strong>
                </p>
                <p className='linguaskill-score'>
                  <img src={star} alt="" />
                  Reading: 171/180
                </p>
                <p className='linguaskill-score'>
                  <img src={star} alt="" />
                  Listening: 169/180
                </p>
                <p className='linguaskill-score'>
                  <img src={star} alt="" />
                  Writing: 150/180
                </p>
                <p className='linguaskill-score'>
                  <img src={star} alt="" />
                  Average Score: 169/180
                </p>
              </div>
                <div className="education-container">
                  <h2>Education</h2>
                  <span className='separator'></span>
                  <div className="row">
                    <div className="college-container">
                      <ReactTooltip id="tooltip-personal-data" place="top" style={{zIndex:"1"}}/>
                      <div className="college-card base-card col-sm-6 col-lg-4 col-xl-3" data-tooltip-content="Universidade de Caxias do Sul" data-tooltip-id="tooltip-personal-data">
                        <div className="college-card-img">
                          <img src={ucsLogo} alt="UCS"/>
                        </div>
                        <div className="college-card-content">
                          <h4>Software Engineering</h4>
                          <h6>Current: 52% completed</h6>
                        </div>
                      </div>
                      <div className="college-card base-card col-sm-6 col-lg-4 col-xl-3" data-tooltip-content="Universidade de Caxias do Sul" data-tooltip-id="tooltip-personal-data">
                        <div className="college-card-img">
                          <img src={ucsLogo} alt="UCS" />
                        </div>
                        <div className="college-card-content">
                          <h4>Mechanical Engineering</h4>
                          <h6>Graduated with Academic Honors 🥇</h6>
                        </div>
                      </div>
                      <div className="college-card base-card col-sm-6 col-lg-4 col-xl-3" data-tooltip-content="Colégio Sagrado Coração de Jesus" data-tooltip-id="tooltip-personal-data">
                        <div className="college-card-img">
                          <img src={logoSagrado} alt="Sagrado" />
                        </div>
                        <div className="college-card-content">
                          <h4>High School</h4>
                        </div>
                      </div>
                      <div className="college-card base-card col-sm-6 col-lg-4 col-xl-3" data-tooltip-content="Colégio Marista Nossa Senhora de Aparecida" data-tooltip-id="tooltip-personal-data">
                        <div className="college-card-img">
                          <img src="https://99prod.s3.amazonaws.com/uploads/image/file/900202/c5977ec933c59bf4251ad1010b3b22df.jpg" alt="Marista"/>
                        </div>
                        <div className="college-card-content">
                          <h4>Elementary School</h4>
                        </div>
                      </div>
                      <div className="college-card base-card col-sm-6 col-lg-4 col-xl-3" data-tooltip-content="CNA - English School" data-tooltip-id="tooltip-personal-data">
                        <div className="college-card-img">
                          <img src={cnaLogo} alt="CNA" />
                        </div>
                        <div className="college-card-content">
                          <h4>CNA English School</h4>
                          <h6>Platinum 2. The most advanced module</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience-container">
                  <h2>Experience</h2>
                  <span className='separator'></span>
                  <div className="row">
                    <div className="professional-container">
                    <div className="college-card base-card col-sm-6 col-lg-4 col-xl-3" data-tooltip-content="Metaway TI" data-tooltip-id="tooltip-personal-data">
                        <div className="college-card-img">
                          <img src={metawayLogo} alt="Metaway" />
                        </div>
                        <div className="college-card-content">
                          <h4>Software Developer</h4>
                          <h6>Since August 2023 - Now</h6>
                        </div>
                      </div>
                      <div className="college-card base-card col-sm-6 col-lg-4 col-xl-3" data-tooltip-content="Career Transition Period" data-tooltip-id="tooltip-personal-data">
                        <div className="college-card-img">
                          <img src={carrerTransitionLogo} alt="CareerTransition" />
                        </div>
                        <div className="college-card-content">
                          <h4>Career Transition Period</h4>
                          <h6>6 months</h6>
                        </div>
                      </div>
                      <div className="college-card base-card col-sm-6 col-lg-4 col-xl-3" data-tooltip-content="Todeschini SA" data-tooltip-id="tooltip-personal-data">
                        <div className="college-card-img">
                          <img src={logoTodeschini} alt="Todeschini" />
                        </div>
                        <div className="college-card-content">
                          <h4>Engineering Assistant</h4>
                          <h6>1 year and 3 months</h6>
                        </div>
                      </div>
                      <div className="college-card base-card col-sm-6 col-lg-4 col-xl-3" data-tooltip-content="WEG Cestari" data-tooltip-id="tooltip-personal-data">
                        <div className="college-card-img">
                          <img src={logoWeg} alt="Weg" />
                        </div>
                        <div className="college-card-content">
                          <h4>Engineering Trainee</h4>
                          <h6>6 months</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
};

export default PersonalData;
