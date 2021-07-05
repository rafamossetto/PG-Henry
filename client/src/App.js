import logo from './logo.svg';
import './styles/App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* Este Header es un preset de React que viene con el npx, dejar comentado */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Route path='/' render={() => <Header />} />
    </div>
  );
}

export default App;
