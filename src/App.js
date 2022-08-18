import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartProvider from "./components/CartContext"
import Cart from "./components/Cart"
const greeting = "AGUANTE BELGRANO"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={greeting} />} />
            <Route path="/category/:idCat" element={<ItemListContainer greeting={greeting} />} />
            <Route path="/item/:idProd" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </div>
    </BrowserRouter >
  )
}

export default App;
