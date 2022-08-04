import logo from "./logoCab.png"

export default function Home() {
    return (
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
    )
}