import "../component/PopularItems.css";
import { IoMdInformationCircle } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import ItemData from "./../assets/MostPopularItems.json";

function PopularItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetchItems();
    }, []);
  
    const fetchItems = () => {
      try {
        setItems(ItemData.data || []);
      } catch (error) {
        console.error("Error Item data:", error);
      }
    };
  return (
    <section className="mb-20">
      <div className="container">
        <div className="flex items-center justify-between gap-2 mb-6">
          <h2 className="text-2xl font-semibold capitalize">Popular Items</h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {items.map((item) => (
            <div key={item.id} className="product-card-list">
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
          ))}
        </div>
        <div id="item-info-modal" className="modal ff-modal info-modal"></div>
        <div id="item-variation-modal" className="modal ff-modal"></div>
      </div>
    </section>
  )
}

export default PopularItems
