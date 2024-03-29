import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/NavbarComponent.css';

const NavbarComponent = () => {

  return (
    <div>
      <div >
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="#">Mart Inventory</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <Link to='/LoginPage' class='nav-link'>
                    LoginPage
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link to='/RegistrationForm' class='nav-link'>
                    RegistrationForm
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class='bg'>
        <div className='heading'>
          <marquee>Welcome to Mart Inventory</marquee>
        </div>
      </div>
    </div>

  );
}

export default NavbarComponent;