import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Assets/App.css'
import logo from '../Assets/logo.png'

class Header extends Component{
    render(){
        return(
            <Navbar className="Navbar" expand="lg">
            <Navbar.Brand href="/"><img className="Logo" src={logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
               <Nav.Link href="/About">About</Nav.Link>
               <Nav.Link href="/Schedule">Schedule</Nav.Link>
               <Nav.Link href="/Stats">Stats</Nav.Link>
               <Nav.Link href="/Standings">Standings</Nav.Link>
               <Nav.Link href="/Teams">Teams</Nav.Link>
               </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;