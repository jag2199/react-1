import logo from "./logoCab.png"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="AGUANTE BELGRANO" />
      <ItemDetailContainer />
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
