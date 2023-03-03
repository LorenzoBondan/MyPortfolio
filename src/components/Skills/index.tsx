import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import visualbasic from 'assets/images/visualbasic.png';

import './styles.css';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        <div className='skills-container' id="skills">
            <div className="skills-box wow zoomIn">
                <h2>Skills</h2>
                <p>This are some of the programming languages and frameworks that I use to develop my projects</p>

                <Carousel responsive={responsive} infinite={true} className="skills-slider" autoPlay={true} autoPlaySpeed={2500}>
                    <div className="item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="" />
                        <h5>Java</h5>
                    </div>
                    <div className="item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="" />
                        <h5>Spring Boot</h5>
                    </div>
                    <div className="item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                        <h5>React</h5>
                    </div>
                    <div className="item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />
                        <h5>TypeScript</h5>
                    </div>
                    <div className="item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                        <h5>HTML5</h5>
                    </div>
                    <div className="item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
                        <h5>CSS3</h5>
                    </div>
                    <div className="item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="" />
                        <h5>C#</h5>
                    </div>
                    <div className="item">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" alt="" />
                        <h5>PostgreSQL</h5>
                    </div>
                    <div className="item">
                        <img src={visualbasic} alt="" />
                        <h5>Visual Basic</h5>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Skills;