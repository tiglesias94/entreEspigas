import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (   
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>

            <Navbar.Brand as={Link} to="/">
                <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Entre Espigas
            </Navbar.Brand>

            <Nav className="me-auto">
                <Nav.Link as={Link} to="/productos">PRODUCTOS</Nav.Link>
                <Nav.Link href="#link">EVENTOS</Nav.Link>
                <Nav.Link href="#home">VENTAS CORPORATIVAS</Nav.Link>
                <Nav.Link href="#home">QUIERO VENDER</Nav.Link>
            </Nav>

            </Container>
        </Navbar>
    </div>
  );
}
 
export default NavBar;