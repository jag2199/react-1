import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const greeting = "AGUANTE BELGRANO"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={greeting} />} />
          <Route path="/category/:idCat" element={<ItemListContainer greeting={greeting} />} />
          <Route path="/item/:idProd" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
