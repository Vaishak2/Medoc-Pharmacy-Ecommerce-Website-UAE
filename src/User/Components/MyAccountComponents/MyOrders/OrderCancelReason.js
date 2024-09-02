import React from 'react';
import prodctImg from "../../../../Assets/Top Product image/pngwing.com (14) 1.png";
import './OrderCancelReason.css'; // Import custom CSS

function OrderCancelReason() {
  return (
    <div className="text-justify">
      <h2 className="text-base font-semibold sm:mb-6">Cancel order</h2>
      <div className="flex items-start">
        <div className="bg-[#F0F0F0] sm:py-5 sm:px-6 rounded-md">
          <img src={prodctImg} alt="Product" className="w-[35.85px] h-[45.31px] object-cover" />
        </div>
        <div className="sm:ml-8">
          <p className="font-normal sm:text-sm sm:w-[343px]">
            Multivitamin Vitality Vitamin Healthkart <br />Veg 2m Tablet
          </p>
          <div className="flex sm:text-[14px] sm:leading-4 sm:mt-5">
            <p>Size: 250 ml</p>
            <p className="sm:ml-7">Qty: 2</p>
          </div>
        </div>
        <div className="sm:ml-[176px] flex text-sm">
          <p>Order Date:</p>
          <p className="sm:ml-2">26th Nov, 2024</p>
        </div>
      </div>
      <p className="text-[#818180] sm:text-[12px] sm:leading-[18px] mt-4">
        Eligible for Return till 15 May
      </p>

      <div className="border sm:mt-4"></div>

      <div className="sm:mt-4">
        <h3 className="sm:text-[14px] sm:leading-[18px] text-[#000000] font-bold mb-2">Reason for Return</h3>
        <p className="text-[#818180] sm:text-[12px] sm:leading-[18px] sm:mt-2">
          We kindly request you to provide the reason for the return, <br /> as it will be utilized to enhance our service.
        </p>
        <div className="sm:mt-6 sm:text-[14px] sm:leading-[22px]">
          <label className="flex items-center">
            <input
              type="radio"
              name="reason"
              value="defective"
              className="custom-radio"
            />
            <span className="ml-2 text-[#000000]">I have purchased the product elsewhere</span>
          </label>
          <label className="flex items-center sm:mt-4">
            <input
              type="radio"
              name="reason"
              value="elsewhere"
              className="custom-radio"
            />
            <span className="ml-2 text-[#000000]">I want to change the address for order</span>
          </label>
          <label className="flex items-center sm:mt-4">
            <input
              type="radio"
              name="reason"
              value="wrong"
              className="custom-radio"
            />
            <span className="sm:ml-2 text-[#000000]">Expected delivery date is too long</span>
          </label>
          <label className="flex items-center sm:mt-4">
            <input
              type="radio"
              name="reason"
              value="price"
              className="custom-radio"
            />
            <span className="sm:ml-2 text-[#000000]">Price of the product has decreased</span>
          </label>
        </div>
        <div className="sm:mt-6">
          <label htmlFor="comment" className="block sm:text-sm text-[#030300]">
            Comment
          </label>
          <textarea
            id="comment"
            className="sm:w-[396px] sm:h-[144px] p-4 focus:outline-[#304BA0] border border-[#B3B3B3] rounded-lg sm:mt-2 resize-none placeholder:sm:text-base placeholder:sm:font-normal"
            placeholder="Type if you have any specific reason"
            maxLength={256}
          ></textarea>
          <p className="text-[#818180] sm:text-[12px] sm:mt-2">256 character limit.</p>
        </div>
        <button className="sm:w-[396px] sm:mt-8 bg-[#304BA0] text-white py-[19px] rounded-lg sm:text-base hover:bg-[#3e5fc5] transition">
          Confirm Return
        </button>
      </div>
    </div>
  );
}

export default OrderCancelReason;
