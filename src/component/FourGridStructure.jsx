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
        className="product-card-grid-image"
      />
      <div className="product-card-grid-content-group">
        <div className="product-card-grid-header-group">
          <h3 className="product-card-grid-title">{item.name}</h3>
          <button
            type="button"
            className="product-card-grid-info-btn info-btn"
            data-modal="#item-info-modal"
          >
            <IoMdInformationCircle />
          </button>
        </div>
        <p className="product-card-grid-describe char-limit">
          {item.description}
        </p>
        <div className="product-card-grid-footer-group">
          <div className="product-card-grid-price-group">
            <h4 className="product-card-grid-price-current">
              ₹{item.flat_price}
            </h4>
          </div>
          <button
            data-modal="#item-variation-modal"
            className="product-card-grid-cart-btn add-btn"
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
