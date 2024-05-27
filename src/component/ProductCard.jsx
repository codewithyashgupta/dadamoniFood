import React, { useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import "./../assets/ProductCard.css";
import ProductKnowingModal from "./ProductKnowingModal";
import Modal from "./Modal";

function ProductCard({ item }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isProductKnowingModalOpen, setProductKnowingModalOpen] =
    useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openProductKnowingModal = () => setProductKnowingModalOpen(true);
  const closeProductKnowingModal = () => setProductKnowingModalOpen(false);

  return (
    <div className="product-card-list">
      <img
        src={item.cover}
        alt={item.name}
        className="product-card-image"
        onClick={openModal}
      />
      {isModalOpen && (
        <Modal resData={item} closeModal={closeModal} isOpen={isModalOpen} />
      )}{" "}
      <div className="product-card-content">
        <div className="product-card-header">
          <h3 className="product-card-title">{item.name}</h3>
          <button
            className="product-card-info info-btn"
            onClick={openProductKnowingModal}
          >
            <IoMdInformationCircle />
          </button>
          {isProductKnowingModalOpen && (
            <ProductKnowingModal
              price={item.price}
              description={item.description}
              name={item.name}
              closeModal={closeProductKnowingModal}
              isOpen={isProductKnowingModalOpen}
            />
          )}
        </div>
        <p className="product-card-description">{item.description}</p>
        <div className="product-card-footer">
          <div className="product-card-price">
            <h4 className="product-card-current-price">
              ₹{parseFloat(item.flat_price).toFixed(2)}
            </h4>
          </div>
          <button className="product-card-cart-btn add-btn" onClick={openModal}>
            <FaBagShopping />
            <span className="text-xs text-white transition">ADD</span>
          </button>
          {isModalOpen && (
            <Modal
              resData={item}
              closeModal={closeModal}
              isOpen={isModalOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
