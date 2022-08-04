import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from "./CartWidget/CartWidget"

function NavBar() {
    return (<div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">REPUBLICA DE 1905</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="category/1">Remeras</Nav.Link>
                        <Nav.Link href="category/2">Shorts</Nav.Link>
                        <Nav.Link href="category/3">Misceláneo</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <CartWidget />
    </div >)
}

export default NavBar