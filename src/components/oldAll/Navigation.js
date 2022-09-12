import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll as scroll } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';

export default class Navigation extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        fixed="top"
        variant="dark"
        expand="sm"
        sticky="top"
        className="navbar-custom"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="m-auto text-center"
            // activeKey={this.state.activeKey}
          >
            <Nav.Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              as={Link}
              to="about"
            >
              Home
            </Nav.Link>

            <Nav.Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              as={Link}
              to="section2"
            >
              About
            </Nav.Link>
            <Nav.Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              as={Link}
              to="section3"
            >
              Resume
            </Nav.Link>
            <Nav.Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              as={Link}
              to="section4"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              as={Link}
              to="section4"
            >
              Education
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
