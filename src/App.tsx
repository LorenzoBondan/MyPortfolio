import Navbar from './components/Navbar';
import './App.css';
import './assets/styles/custom.scss';
import Banner from 'components/Banner';
import Skills from 'components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='app-container'>
        <Banner/>
        <Skills />
      </div>
    </div>
  );
}

export default App;
