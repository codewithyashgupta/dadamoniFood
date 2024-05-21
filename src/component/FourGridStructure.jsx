import React from 'react'
import { IoMdInformationCircle } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import "./../assets/FourGridItem.css";

function FourGridStructure({item}) {
  return (
    <div key={item.id} className="product-card-grid">
      <img
        src={item.cover}
        alt={item.name}
        className="product-card-item-image"
      />
      <div className="product-card-content">
        <div className="product-card-header">
          <h3 className="product-card-title">{item.name}</h3>
          <button
            type="button"
            className="product-card-info info-btn"
          >
            <IoMdInformationCircle />
          </button>
        </div>
        <p className="product-card-description">
          {item.description}
        </p>
        <div className="product-card-footer">
          <div className="product-card-price">
            <h4 className="product-card-current-price ">
              ₹{item.flat_price}
            </h4>
          </div>
          <button
            className="product-cart-btn add-btn"
          >
            <FaBagShopping className="transition lab lab-bag-2 font-fill-white lab-font-size-14" />
            <span className="text-xs text-white transition">Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FourGridStructure
