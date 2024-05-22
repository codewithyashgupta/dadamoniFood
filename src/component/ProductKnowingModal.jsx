import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import ScrollLock from '../Utilities//ScrollLock';
const ProductKnowingModal = ({ price, description, name, closeModal, isOpen }) => {
  if (!isOpen) {
    return null; // Don't render the modal if it's not open
  }

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
      <ScrollLock isActive={true} />
        <div className="flex items-center justify-center min-h-screen px-4 transition-opacity bg-[#666666] bg-opacity-45">
          <div className="z-20 mx-auto bg-white rounded-lg shadow-lg sm:w-[500px] flex-shrink-0 w-80">
            <div className="flex justify-between w-full pt-2 pl-8 pr-8">
              <h2 className="font-semibold text-gray-900 truncate">{name}</h2>
              <button onClick={closeModal} className="text-2xl text-btnTwo">
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className="mt-2 mb-2 border-t border-gray-400"></div>
            <div className="pl-8 mb-4 text-sm font-semibold">
              <p>
                {description} / ₹{parseFloat(price).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductKnowingModal;
