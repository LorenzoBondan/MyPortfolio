import Navbar from './components/Navbar';
import './App.css';
import './assets/styles/custom.scss';
import Banner from 'components/Banner';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import AboutMe from 'components/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='app-container'>
        <Banner/>
        <Skills />
        <AboutMe/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
