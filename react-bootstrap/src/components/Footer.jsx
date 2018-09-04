import React, { Component } from 'react';
import { Jumbotron, Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Jumbotron>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <h1>EHSN</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}>
                Privacy Policy
            </NavItem>
              <NavItem eventKey={2}>
                Terms and Conditions
            </NavItem>
              <NavItem eventKey={3}>
                GDPR
            </NavItem>
              <NavItem eventKey={4}>
                About
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <h1 class="text-center">All rights reserved</h1>
      </Jumbotron>
    );
  }
}