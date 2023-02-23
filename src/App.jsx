import { useState } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import Search from './components/Search';
import logo from './icons/pikachu.ico';
import logo2 from './icons/Pokeball.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {

  const [query, setQuery] = useState(0);
  const handleNext = () => {
    if (query < 1260) {
      const value = query + 20;
      setQuery(value)
    }
  }

  const handlePrev = () => {
    if (query > 0) {
      const value = query - 20;
      setQuery(value)
    }
  }

  const aux = Math.floor(Math.random() * 100);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} alt="logo2" className='logo2' />
        <h1>Pokedex</h1>
        <img src={logo2} alt="logo2" className='logo2' />
      </header>
      <main>
        <div className='container-search'>
          <Search />
          <img src={logo} alt="logo" className='logo' />
          <section className='container-button'>
            <button className='button-change prev' onClick={handlePrev} >
              <i className="fa-solid fa-backward fa-lg"></i>
            </button>
            <button className='button-change next' onClick={handleNext} >
              <i className="fa-solid fa-forward fa-lg"></i>
            </button>
          </section>
        </div>
        <Pokedex next={query} key={aux} />
      </main>
      <footer>
        @Wolcken by Alfredo Ramos
      </footer>
    </div>
  );
}

export default App;
