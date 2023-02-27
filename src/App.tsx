import Navbar from './components/Navbar';
import './App.css';
import './assets/styles/custom.scss';
import Banner from 'components/Banner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='app-container'>
        <Banner/>
      </div>
    </div>
  );
}

export default App;
