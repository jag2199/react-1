import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import CartWidget from "./CartWidget/CartWidget"

function NavBar() {
    return (<div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/">REPUBLICA DE 1905</Link>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/category/1">Remeras | </Link>
                        <Link to="/category/2">Shorts | </Link>
                        <Link to="/category/3">Misceláneo</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <CartWidget />
    </div >)
}

export default NavBar