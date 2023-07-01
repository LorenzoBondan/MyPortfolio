import Navbar from './components/Navbar';
import './App.css';
import './assets/styles/custom.scss';
import Banner from 'components/Banner';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import Footer from 'components/Footer';
import PersonalData from 'components/AboutMe/PersonalData';
import CoursesTable from 'components/CoursesTable';
import Tools from 'components/Tools';
import Modal from 'react-modal';

Modal.setAppElement("#root");

function App() {

  const navbarStyles = {
    backgroundColor: '#212121',
    color: '#fff',
  };
  
  return (
    <div className="App">
      <Navbar styles={navbarStyles}/>
      <div className='app-container'>
        <Banner/>
        <Skills/>
        <Tools/>
        <PersonalData/>
        <Projects/>
        <CoursesTable/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
