import logo from "./logoCab.png"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="AGUANTE BELGRANO" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://www.belgranosocios.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          BELGRANO ES LOCURA
        </a>
      </header>
    </div>
  );
}

export default App;
