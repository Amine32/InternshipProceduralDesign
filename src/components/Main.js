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
                            <Nav.Link href="/InternshipProceduralDesign/student">Student</Nav.Link>
                            <Nav.Link href="/InternshipProceduralDesign/company">Company</Nav.Link>
                            <Nav.Link href="/InternshipProceduralDesign/curator">Curator</Nav.Link>
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