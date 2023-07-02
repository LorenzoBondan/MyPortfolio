import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import './styles.css';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
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

    const items = [
        {
            name: "Java",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        {
            name: "Spring Boot",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
        },
        {
            name: "React",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            name: "Typescript",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        {
            name: "HTML5",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
            name: "CSS3",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
            name: "C#",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        },
        {
            name: "PostgreSQL",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
        },
    ]

    return(
        <div className='skills-container' id="skills">
            <div className="skills-box wow zoomIn">
                <h2>Skills</h2>
                <span className="separator"></span>
                <p>This are some of the programming languages, frameworks and tools that I use to develop my projects</p>
                <Carousel responsive={responsive} infinite={true} className="skills-slider" autoPlay={true} autoPlaySpeed={2500}>
                    {items.map((item,index) => (
                        <div className="item" key={index}>
                            <img src={item.imgUrl} alt={item.name} data-tooltip-content={item.name} data-tooltip-id={`myTooltip-${item.name}`}/>
                            <ReactTooltip id={`myTooltip-${item.name}`} place="top"/>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Skills;