import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartProvider from "./components/CartContext"
import Cart from "./components/Cart"
import BuyForm from "./components/BuyForm"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
const greeting = "BIENVENIDO A REPUBLICA DE 1905"

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-belgrano">
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={greeting} />} />
            <Route path="/category/:idCat" element={<ItemListContainer greeting={greeting} />} />
            <Route path="/item/:idProd" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/buy" element={<BuyForm />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
          <Footer />
        </CartProvider>
      </div>
    </BrowserRouter >
  )
}

export default App;
