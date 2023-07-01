
import './styles.css';
import AsthaLogo from 'assets/images/astah-logo.png';
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Tools = () => {

    const tools = [
        {
            name: "Git",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        {
            name: "Github",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
        {
            name: "VS Code",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        },
        {
            name: "Visual Studio",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
        },
        {
            name: "Postman",
            imgUrl: "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/postman-icon.png"
        },
        {
            name: "Npm",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
        },
        {
            name: "Yarn",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"
        },
        {
            name: "Bootstrap",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        },
        {
            name: "Photoshop",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg"
        },
        {
            name: "Figma",
            imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        },
    ];
    return(
        <div className='tools-container'>
            <ul className='tools-list'>
                {tools.map((tool, index) => (
                    <li className='tool-item' key={index}>
                        <img src={tool.imgUrl} alt={tool.name} data-tooltip-content={tool.name} data-tooltip-id={`myTooltip-${tool.name}`}/>
                        <ReactTooltip id={`myTooltip-${tool.name}`} place="top"/>
                    </li>
                ))}
                <li className='tool-item'>
                    <img src={AsthaLogo} alt="" data-tooltip-content="Astah" data-tooltip-id="Astah-tooltip"/>
                    <ReactTooltip id="Astah-tooltip" place="top"/>
                </li>
            </ul>
        </div>
    );
}

export default Tools;