import React, { Component } from 'react';
// import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, } from 'reactstrap';
import { Link } from 'react-router-dom';
// import Bootstrap from 'bootstrap';
// import axios from 'axios'; 

// import logo from '../assets/img/logo_transparent_white.png';
import logoLogout from '../assets/img/logo_transparent_white.png';

 class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };


  }

  componentDidUpdate = () => {
    // JSON.parse(localStorage.getItem('loggedIn'));
    // localStorage.getItem('loggedIn');
  }
  

  render() {
    // const loggedIn = this.props.loggedIn ;
    // console.log(this.props);
    return (



      this.props.loggedIn ? (
        
        <nav className='navbar navbar-expand-lg fixed-top' >
          <a href='/bookmarks' className='navbar-brand'><img id='logoutLogo' src={logoLogout} alt='logo' /></a>
          <Link to='/signin' className='nav-link landing-nav' onClick={this.props.signoutUser}> Log Out </Link>
        </nav>

      ) : (
        <nav className='navbar navbar-expand-lg fixed-top' >
          <a href='/bookmarks' className='navbar-brand'><img id='logoutLogo' src={logoLogout} alt='logo' /></a>
          <Link to='/signin' className='nav-link landing-nav '> Log In </Link>
          <Link to='/signup' className='nav-link'> Sign Up</Link>
        </nav>
       /* <nav class="navbar navbar-expand-lg fixed-top ">
        <a class="navbar-brand" href="/"><img id='logoutLogo' src={logoLogout} alt='logo' /></a>
        <Link to='/signup' class="nav-link navigation"  href="/">Sign Up</Link> 
        <Link to='/signin' class="nav-link navigation"  href="/">Log In</Link>
       </nav> */
      )

      
    )
} 
  
}

export default NavBar;
 
// eslint-disable-next-line no-lone-blocks
{/* <nav className='navbar mr-3' id='navBar'>
  <a href='/' className='navbar-brand'><img id='logoutLogo' src={logoLogout} alt='logo' /></a>
  <Link to='/' className='nav-link mb-4 ml-4 text-primary btn btn-outline-primary bg-white btn-sm'
    onClick={this.props.signoutUser}> Log Out</Link>
</nav>

<nav className='navbar mr-3' id='navBar'>
  <a href='/bookmarks' className='navbar-brand mt-4'><img id='loginLogo' src={logo} alt='logo' /></a>
  <Link to='/signin' className='nav-link mt-4 text-primary btn btn-primary bg-white landing-nav btn-lg'> Log In </Link>
  <Link to='/signup' className='nav-link mt-4 ml-3 text-white btn bg-primary btn-lg'> Sign Up</Link>
</nav> */}