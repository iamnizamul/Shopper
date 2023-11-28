import React from 'react';
import './Item.css';

function Item(props) {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <fiv className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </fiv>
    </div>
  )
}

export default Item