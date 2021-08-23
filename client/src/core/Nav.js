import React from 'react';
import { Nav } from "react-bootstrap";

const Navigation = () => {
    return (
       
      <Nav className="nav-main">
        <Nav.Item className="main-li">
          <Nav.Link className="main-a" href="/comics">
            Comics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="main-li">
          <Nav.Link className="main-a" href="/toys">
            Toys
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="main-li">
          <Nav.Link className="main-a" href="/tcg">
            TCG
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="main-li">
          <Nav.Link className="main-a" href="/statues">
            Statues
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="main-li">
          <Nav.Link className="main-a" href="/sportscards">
            Sports Cards
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="main-li">
          <Nav.Link className="main-a" href="/pedalcars">
            Pedal Cars
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="main-li">
          <Nav.Link className="main-a" href="/vintagead">
            Vintage Advertising
          </Nav.Link>
        </Nav.Item>
            </Nav>
        
    );
}

export default Navigation