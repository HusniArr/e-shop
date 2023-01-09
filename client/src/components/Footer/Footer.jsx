import React from 'react'
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Men</span>
            <span>Women</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dicta officiis quos eligendi exercitationem blanditiis minus delectus, nostrum, placeat voluptatum suscipit aliquam atque eaque libero quis quaerat vitae, numquam commodi repellat nihil. Vel enim hic quisquam modi vero explicabo repudiandae blanditiis praesentium, incidunt ratione cupiditate dolorem corporis nostrum.</span>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt dicta officiis quos eligendi exercitationem blanditiis minus delectus, nostrum, placeat voluptatum suscipit aliquam atque eaque libero quis quaerat vitae, numquam commodi repellat nihil. Vel enim hic quisquam modi vero explicabo repudiandae blanditiis praesentium, incidunt ratione cupiditate dolorem corporis nostrum.</span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logo">Coolstore</span>
            <span className="copyright">&copy;Copyright 2023. All Rights Reserved</span>
          </div>
          <div className="right">
            <img src="/img/payment.png" alt="payment" />
          </div>
        </div>
    </div>
  )
}

export default Footer