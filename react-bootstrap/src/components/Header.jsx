import React, { Component } from 'react';
import { Jumbotron, Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import './Header.css';

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
              <h1>ehsn</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}>
                Our successes
            </NavItem>
              <NavItem eventKey={2}>
                Login
            </NavItem>
              <NavItem eventKey={3}>
                Sign up
            </NavItem>
              <NavItem eventKey={4}>
                <Button bsStyle="primary">Submit idea</Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <h1 class="text-center">Submit</h1>
      </Jumbotron>
    );
  }
}
