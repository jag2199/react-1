import CartWidget from "./CartWidget/CartWidget"
function NavBar() {
    return (<div>
        <h1>REPUBLICA DE 1905</h1>
        <ul>
            <li>Inicio</li>
            <li>Tienda</li>
            <li>Ofertas</li>
            <li>Redes</li>
        </ul>
        <CartWidget />
    </div >)
}

export default NavBar