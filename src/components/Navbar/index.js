import React from "react"
import "./style.css";
import {

    Navbar,

} from 'react-bootstrap'

function NavBar(props) {
    return (
        <Navbar>
            <Navbar.Brand href="#home">CLICKY GAME</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <h3>Top Score:  {props.topScore}</h3>
                    <h3>Current Score:   {props.currentScore}</h3>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>

    );

}

export default NavBar;