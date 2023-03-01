import Navbar from './components/Navbar';
import './App.css';
import './assets/styles/custom.scss';
import Banner from 'components/Banner';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import Footer from 'components/Footer';
import PersonalData from 'components/AboutMe/PersonalData';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='app-container'>
        <Banner/>
        <Skills />
        <PersonalData/>
        <Projects/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
