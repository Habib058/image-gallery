import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Dats from './components/Dates/Dats';

function App() {
  return (
    <div className="App">
      <Header/>
      <Images/>
      <Dats/>
    </div>
  );
}

export default App;
