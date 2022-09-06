import { Link } from 'react-router-dom'
import CartWidget from "./CartWidget/CartWidget"

function NavBar() {
    return (
        <header>
            <div className="row bg-dark">
                <div className="col-lg-1 col-3 ">
                    <Link to="/">
                        <img className="logoEdit" src="https://firebasestorage.googleapis.com/v0/b/react-1-a3a46.appspot.com/o/logo.png?alt=media&token=9c1f9376-4f50-429b-bbc1-31dce3c55dbd" alt="logo CAB" />
                    </Link>
                </div>
                <nav className="col-lg-10 mt-auto mb-auto col-9">
                    <ul className="nav nav-pills">
                        <li className="nav-item border-right">
                            <Link className="nav-link" to="/">Principal</Link>
                        </li>
                        <li className="nav-item border-right">
                            <Link className="nav-link" to="/category/1">Remeras</Link>
                        </li>
                        <li className="nav-item border-right">
                            <Link className="nav-link" to="/category/2">Shorts</Link>
                        </li>
                        <li className="nav-item border-right">
                            <Link className="nav-link" to="/category/3">Otros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faq">FAQ</Link>
                        </li>
                    </ul>
                </nav>
                <div className='col-lg-1'>
                    <CartWidget />
                </div>
            </div>
        </header>)
    {/* <div>
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
    </div >) */}

}

export default NavBar