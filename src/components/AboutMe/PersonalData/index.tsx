import ucsLogo from 'assets/images/ucs.jpg';
import logoSagrado from 'assets/images/logo-sagrado.png';
import logoTodeschini from 'assets/images/todeschini.png';
import logoWeg from 'assets/images/weg.png';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import cnaLogo from 'assets/images/cna-logo.jpg';
import './styles.css';

const PersonalData = () => {
  return (
    <>
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
                          <h6>Graduated</h6>
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
                      <div className="college-card base-card col-sm-6 col-lg-4 col-xl-3" data-tooltip-content="Todeschini SA" data-tooltip-id="tooltip-personal-data">
                        <div className="college-card-img">
                          <img src={logoTodeschini} alt="UCS" />
                        </div>
                        <div className="college-card-content">
                          <h4>Engineering Assistent</h4>
                          <h6>1 year and 3 months</h6>
                        </div>
                      </div>
                      <div className="college-card base-card col-sm-6 col-lg-4 col-xl-3" data-tooltip-content="WEG Cestari" data-tooltip-id="tooltip-personal-data">
                        <div className="college-card-img">
                          <img src={logoWeg} alt="UCS" />
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
    </>
  );
};

export default PersonalData;
