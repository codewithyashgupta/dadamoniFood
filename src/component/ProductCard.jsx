import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import "./../assets/ProductCard.css";

function ProductCard({ item }) {
  return (
    <div className="product-card-list">
      <img src={item.cover} alt="" className="product-card-list-image" />
      <div className="product-card-list-content-group">
        <div className="product-card-list-header-group">
          <h3 className="product-card-list-title">{item.name}</h3>
          <button className="product-card-list-info-btn info-btn">
            <IoMdInformationCircle />
          </button>
        </div>
        <p className="product-card-list-describe char-limit">
          {item.description}
        </p>
        <div className="product-card-list-footer-group">
          <div className="product-card-list-price-group">
            <h4 className="product-card-list-price-current">
              ₹{parseFloat(item.flat_price).toFixed(2)}
            </h4>
          </div>
          <button
            data-modal="#item-variation-modal"
            className="product-card-list-cart-btn add-btn"
          >
            <FaBagShopping />
            <span className="text-xs text-white transition">ADD</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
