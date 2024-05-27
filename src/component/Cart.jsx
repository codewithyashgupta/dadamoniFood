import React, { useState } from "react";
import ScrollLock from "../Utilities/ScrollLock";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Cart_GIF_URL } from "../Utilities/configureFIle";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (itemName) => {
    setCartItems([...cartItems, itemName]);
  };
  return (
    <div className="fixed right-0 z-30 w-full h-screen bg-white sm:w-[400px]  ">
      <ScrollLock isActive={true} />
      <div className="fixed right-0 z-50 p-4 ">
        <IoIosCloseCircleOutline className="text-3xl text-white rounded-full cursor-pointer bg-btnTwo" />
      </div>
      <h2 className="flex justify-center mt-16 font-sans text-2xl font-bold item-center text-btnOne">
        My Cart
      </h2>
      <div>
        <div className="w-full">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <img
              src={Cart_GIF_URL}
              alt="Empty Cart"
              className="mx-auto mt-4 w-[150px] pb-10"
            />
            <p className="mb-4 text-sm text-gray-500">Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
          </div>
        ) : (
          <div id="cart-items" className="space-y-2">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="p-2 bg-white border rounded-md shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        )}
        </div>
         </div>
      </div>
  );
}

export default Cart;
