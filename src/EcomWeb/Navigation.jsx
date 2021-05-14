import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Openmodal from './Openmodal';
    


export default function Navigation() {
   
     return (

        
            <>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Shoping blog</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link  href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Contact</Nav.Link>
                                <NavDropdown title="Category" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Womens</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">mens</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Clildrens</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button><br/>
                                <div>
                                    <Openmodal/>
                                
                                </div>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </>
        )
    }

