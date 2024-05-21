import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import "./../assets/ProductCard.css";

function ProductCard({ item }) {
  return (
    <div className="product-card-list">
      <img src={item.cover} alt="" className="product-card-image" />
      <div className="product-card-content">
        <div className="product-card-header">
          <h3 className="product-card-title">{item.name}</h3>
          <button className="product-card-info info-btn">
            <IoMdInformationCircle />
          </button>
        </div>
        <p className="product-card-description ">
          {item.description}
        </p>
        <div className="product-card-footer">
          <div className="product-card-price">
            <h4 className="product-card-current-price">
              ₹{parseFloat(item.flat_price).toFixed(2)}
            </h4>
          </div>
          <button
            className="product-card-cart-btn add-btn"
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
