import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './header.css';
import { useHistory } from "react-router-dom";
//import { hashHistory } from 'react-router';
//import User from './User';
// export const Item = () => {
//   let history = useHistory();
//   return (
//       <>
//         <button onClick={() => history.goBack()}>Back</button>
//       </>
//   );
// };
function Header() {
  let history = useHistory();
  return (
    <div>
      {/* <a onClick={()=>hashHistory.goBack()}>&#8592; </a>  */}

    
    <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <a href="/" onClick={() => history.goBack()}>&#8592;</a>
      <div className="card col-lg-3 col-md-4 col-sm-6 col-12">
        <NavDropdown className='dropdownli'  title="USERS" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">user1</NavDropdown.Item>
  
          <NavDropdown.Item href="#action/3.2">user2</NavDropdown.Item>
       
          <NavDropdown.Item href="#action/3.3">user3</NavDropdown.Item>
        
   
          <NavDropdown.Divider />
  
        </NavDropdown>
        </div>
      </Nav>
  
    </Navbar.Collapse>
  </Navbar>
  </div>
  );
}
export default Header;
