import React, { useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import "./../assets/FourGridItem.css";
import ProductKnowingModal from "./ProductKnowingModal";
import Modal from "./Modal";

function FourGridStructure({ item }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isProductKnowingModalOpen, setProductKnowingModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openProductKnowingModal = () => setProductKnowingModalOpen(true);
  const closeProductKnowingModal = () => setProductKnowingModalOpen(false);

  return (
    <div key={item.id} className="product-card-grid">
      <img
        src={item.cover}
        alt={item.name}
        className="product-card-item-image"
        onClick={openModal}
      />
      {isModalOpen && (
            <Modal
              resData={item}
              closeModal={closeModal}
              isOpen={isModalOpen}
            />
          )}
      <div className="product-card-content">
        <div className="product-card-header">
          <h3 className="product-card-title">{item.name}</h3>
          <button
            type="button"
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
            <h4 className="product-card-current-price ">₹{item.flat_price}</h4>
          </div>
          <button className="product-cart-btn add-btn" onClick={openModal}>
            <FaBagShopping className="transition lab lab-bag-2 font-fill-white lab-font-size-14" />
            <span className="text-xs text-white transition">Add</span>
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

export default FourGridStructure;
