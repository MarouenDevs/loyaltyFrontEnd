import React, { Component } from 'react';

import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";



class Menu extends Component {


    render() {

        return (

                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">loyalty </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="/">
                                Dashbord
                            </NavItem>
                            <NavItem eventKey={2} href="/top-riders">
                                Top riders
                            </NavItem>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>


        );
    }
}

export default Menu;
