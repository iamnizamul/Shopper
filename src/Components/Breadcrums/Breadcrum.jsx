import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

function Breadcrum(props) {
    const {product} = props
  return (
    <div className='breadcrum'>
        HOME&nbsp;<img src={arrow_icon} alt="" />&nbsp;SHOP&nbsp;<img src={arrow_icon} alt="" />&nbsp;{product.category}&nbsp;<img src={arrow_icon} alt="" />&nbsp;{product.name}
    </div>
  )
}

export default Breadcrum