
import './styles.css';
import AsthaLogo from 'assets/images/astah-logo.png';

const Tools = () => {
    return(
        <div className='tools-container'>
            <ul className='tools-list'>
                <li className='tool-item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />
                    <p>Git</p>
                </li>
                <li className='tool-item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
                    <p>Github</p>
                </li>
                <li className='tool-item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="" />
                    <p>VS Code</p>
                </li>
                <li className='tool-item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" alt="" />
                    <p>Visual Studio</p>
                </li>
                <li className='tool-item'>
                    <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/postman-icon.png" alt="" />
                    <p>Postman</p>
                </li>
                <li className='tool-item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="" />
                    <p>Npm</p>
                </li>
                <li className='tool-item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" alt="" />
                    <p>Yarn</p>
                </li>
                <li className='tool-item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                    <p>Bootstrap</p>
                </li>
                <li className='tool-item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" alt="" />
                    <p>Photoshop</p>
                </li>
                <li className='tool-item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="" />
                    <p>Figma</p>
                </li>
                <li className='tool-item'>
                    <img src={AsthaLogo} alt="" />
                    <p>Astah</p>
                </li>
            </ul>
        </div>
    );
}

export default Tools;