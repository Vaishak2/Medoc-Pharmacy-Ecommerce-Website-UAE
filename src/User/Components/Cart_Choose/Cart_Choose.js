import React, { useEffect, useState } from "react";
import ChooseImg from "../../../Assets/Top Product image/pngwing.com (14) 1.png";
import Close from "../../../Assets/Icons/close.png";

function Cart_Choose({ item, onClose, onQuantityChange, onSizeChange }) {
  const [Size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    if (item) {
      setSize(item.size);
      setQuantity(item.quantity);
    }
  }, [item]);

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    onSizeChange(item.id, newSize);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onQuantityChange(item.id, newQuantity);
    }
  };

  if (!item) return null; 

  return (
    <div className="sm:w-[473px] p-10 bg-white rounded-xl border">
      <div className="flex justify-between">
        <img src={ChooseImg} alt="Product" className="sm:w-[100px] sm:h-[100px]" />
        <div className="ml-4 flex-grow text-justify">
        <div className="sm:w-[213px]">  <h2 className="text-[14px] font-medium sm:leading-5 ">{item.name}</h2> </div>
          <div className="text-[16px] font-semibold sm:mt-4">AED {item.price}</div>
          <div className="flex sm:mt-2">
            <div className="text-[14px] leading-4 text-[#A8A8A8] line-through">AED {item.originalPrice}</div>
            <div className="text-[14px] leading-4 text-[#0FB015] sm:ml-4">{item.discount}</div>
          </div>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <img src={Close} alt="Close" className="w-6 h-6 sm:translate-y-[-40px]" />
        </button>
      </div>

      <hr className="my-4 mt-[33px]" />

      <div className="mb-4 mt-[30px]">
        <h3 className="sm:text-[16px] sm:leading-4 font-medium text-justify">Choose Size</h3>
        <div className="flex mt-2">
          {["100 ml", "250 ml", "500 ml"].map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)} // Change here
              className={`sm:w-[68px] sm:h-[32px] text-center border sm:mt-4 rounded-lg text-[16px] mr-2 ${
                Size === size ? "bg-[#304BA0] text-white" : "bg-white text-gray-800"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-justify sm:text-[16px] sm:mt-4 leading-4">Quantity</h3>
        <div className="flex items-center mt-4 px-4 py-2 border rounded-lg bg-[#F5F5F5] text-gray-800 justify-between sm:w-[141px]">
          <button onClick={() => handleQuantityChange(quantity - 1)} className="" disabled={quantity <= 1}>
            <h1 className="sm:text-[24px] font-medium"> - </h1>
          </button>
          <span className="mx-4">{quantity}</span>
          <button onClick={() => handleQuantityChange(quantity + 1)} className="">
            <h1 className="sm:text-[24px] font-medium"> + </h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart_Choose;
