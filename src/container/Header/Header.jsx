import React from 'react';

import './Header.css';
import { images } from '../../constants';
import{Button} from '../../components';
const Header = () => (
  <div className='app__wrapper app__header'>
    <div className='app__header-information'>
      <h1 className='app__header-title'>Reduce Food Waste and Save Money</h1>
      <p className='app__header-subtitle'>We want to tackle food waste by recommending recipes based on leftover ingredients in the fridge at home</p>
      <Button title="Get started" type="submit"/>
      <div className='app__header-top'>
        <img src={images.header02} alt="imagen de chica" />
        <div>
          <h5>Our  happy customers</h5>
          <p>4.8 (450 + reviews)</p>
        </div>
      </div>
    </div>
    <div className='app__header-images'>
      <div className='app__header-images_circule'></div>
      <img src={images.header01} alt="imagen de chica" />
    </div>
  </div>
);

export default Header;
