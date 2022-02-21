import React from 'react';

import './Button.css';

const Button = ({title,type}) => (
  <button className='app__btn' type={type}>{title}</button>
);

export default Button;
