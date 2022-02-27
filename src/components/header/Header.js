import { Container, Form, FormControl, Nav, Navbar, NavDropdown, } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate} from "react-router-dom"


function Header() {
  const navigate = useNavigate()
    navigate("/", {replace: true} )
    return (
<>
<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
    <Navbar.Brand href="/">
     Home
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className='m-auto'>
        <Form inline="true">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Nav>
      <Nav>
        <Nav.Link href="/login">
          RapidLearning
        </Nav.Link>
        <NavDropdown title="Godwin O" id="collapsible-nav-dropdown">
          <NavDropdown.Item>My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">
          Log Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}

export default Header

// href="" === <Link to=""></Link>. import {Link} from react-router-dom