import React from 'react';
import { images } from '../../constants';
import './Navbar.css';
import Button from '../Button/Button';

const Navbar = () => (
  <div className='app__navbar'>
    <img src={images.logo} alt="logo diet" />
    <div className='app__navbar-menu'>
      <a href="#uno">Home</a>
      <div className='app__navbar__menu-line'/>
      <a href="#uno">Reciple</a>
      <div className='app__navbar__menu-line'/>
      <a href="#uno">Popular</a>
    </div>
    <Button title="Sign up" type="sudmit"/>
  </div>
);

export default Navbar;
