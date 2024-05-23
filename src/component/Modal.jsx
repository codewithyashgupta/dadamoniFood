import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ScrollLock from "../Utilities//ScrollLock";
import { IoMdInformationCircle } from "react-icons/io";
import ProductKnowingModal from "./ProductKnowingModal";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { CiCircleMinus } from "react-icons/ci";
function Modal(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const { resData, closeModal, isOpen } = props;
  if (!isOpen) {
    return null; // Don't render the modal if it's not open
  }
  const { thumb, title, name, description, price } = resData;
  const fixedPrice = parseFloat(price).toFixed(2)
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <ScrollLock isActive={true} />
        <div className="flex items-center justify-center min-h-screen transition-opacity bg-gray-700 bg-opacity-45">
          <div className="z-20 mx-auto bg-white rounded-lg shadow-lg sm:w-[500px] flex-shrink-0 w-[700px]">
            <div className="flex flex-col justify-between p-2">
              <div className="flex justify-between w-full pt-2 leading-8">
                <div className="flex gap-5">
                  <img src={thumb} alt={title} className="w-20 rounded-lg" />
                  <div>
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-900">
                        {name}
                      </span>
                      <div className="flex ml-2 text-gray-600">
                        <button onClick={openModal} className="rounded-full hover:bg-white hover:text-btnTwo">
                          <IoMdInformationCircle />
                        </button>
                        {isModalOpen && (
                          <ProductKnowingModal
                            price={price}
                            description={description}
                            name={name}
                            closeModal={closeModal}
                            isOpen={isModalOpen}
                          />
                        )}
                      </div>
                    </div>
                    <p className="text-sm">{description}</p>
                    <p className="font-bold">₹{fixedPrice}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <button
                    onClick={closeModal}
                    className="text-2xl text-red-500 hover:text-red-600"
                  >
                    <IoIosCloseCircleOutline />
                  </button>
                </div>
              </div>
              <div className="w-full mt-4">
                <div className="flex gap-4">
                  <span className="font-semibold">Quantity:</span>
                  <div className="flex items-center gap-2 font-normal bg-gray-100 rounded-lg">
                    <button className="rounded-full hover:text-white hover:bg-btnTwo text-btnTwo">
                      <CiCirclePlus className="text-xl" />
                    </button>
                    <span>1</span>
                    <button className="rounded-full text-btnTwo hover:bg-btnTwo hover:text-white">
                      <CiCircleMinus className="text-xl"  />
                    </button>
                  </div>
                </div>
                <div className="mt-4 review-collector">
                  <p className="mb-2 text-sm font-semibold">Special Instruction:</p>
                  <textarea placeholder="Add note" id="instruction" className="w-full h-8 text-sm border-2 outline-none resize-none" ></textarea>
                </div>
                <button className="w-full py-2 font-semibold text-white rounded-lg bg-btnTwo">ADD TO Cart- ₹{fixedPrice}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
