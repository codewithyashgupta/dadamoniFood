import { IoMdInformationCircle } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import ItemData from "./../assets/FeaturedItem.json";
import "../component/FeaturedItem.css";
function FeaturedItems() {
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
        <h2 className="mb-6 text-2xl font-semibold capitalize">
          Featured Items
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {items.map((item) => (
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
                    <IoMdInformationCircle  />
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedItems
