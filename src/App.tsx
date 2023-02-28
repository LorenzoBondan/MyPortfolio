import Navbar from './components/Navbar';
import './App.css';
import './assets/styles/custom.scss';
import Banner from 'components/Banner';
import Skills from 'components/Skills';
import Projects from 'components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='app-container'>
        <Banner/>
        <Skills />

        <Projects/>
      </div>
    </div>
  );
}

export default App;
