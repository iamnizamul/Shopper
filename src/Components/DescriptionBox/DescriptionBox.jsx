import React from 'react';
import './DescriptionBox.css';

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that fecilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where bussinesses and individuals can showcase their products, interact with customers, and contact transactions without the need for a phsical presence. E-commerce websites have gained immense popularity due to their convenience , accessibility and the global reach there offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations(eg. sizes, colors). Each product visually has its own dedicated page with relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox