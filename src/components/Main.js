import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";

export default function Main() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Index</Navbar.Brand>
                    <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
                    <Navbar.Collapse id={"basic-navbar-nav"}>
                        <Nav className="me-auto">
                            <Link to="/student" className="nav-link">Student</Link>
                            <Link to="/company" className="nav-link">Company</Link>
                            <Link to="/curator" className="nav-link">Curator</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="py-3 px-5">
                <Outlet/>
            </Container>
        </>
    )
}