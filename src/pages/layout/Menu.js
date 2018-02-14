import React, {Component} from 'react';

import { Nav, Navbar, NavItem } from "react-bootstrap";


class Menu extends Component {


    render() {

        return (

            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">loyalty </a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">
                            Dashboard
                        </NavItem>
                        <NavItem eventKey={2} href="/top-riders">
                            Top riders
                        </NavItem>
                        <NavItem eventKey={3} href="/statics">
                            Statistics
                        </NavItem>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default Menu;
