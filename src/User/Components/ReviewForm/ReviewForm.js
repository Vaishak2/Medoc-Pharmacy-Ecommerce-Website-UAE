import React, { useState, useRef } from 'react';
import Add_photo from "../../../Assets/Icons/add_a_photo.svg"

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const fileInputRef = useRef(null);

  const handleRating = (rate) => setRating(rate);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ rating, title, review });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('File selected:', file);
      // Handle the file upload logic here
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <img src="your-product-image-url" alt="Product" className="w-12 h-12 object-cover rounded mr-4" />
        <div>
          <h2 className="font-semibold text-lg">Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet</h2>
        </div>
        <button className="ml-auto text-gray-500 hover:text-gray-800">
          &times;
        </button>
      </div>

      <h3 className="mb-4">How would you rate it?</h3>
      <div className="flex mb-6">
        {[1, 2, 3, 4, 5].map((rate) => (
          <span
            key={rate}
            className={`cursor-pointer text-2xl ${
              rating >= rate ? 'text-[#304BA0]' : 'text-[#EDEDED]'
            }`}
            onClick={() => handleRating(rate)}
          >
            ★
          </span>
        ))}
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Upload a video or photo</label>
        <div
          onClick={triggerFileUpload}
          className="border-2 border-dashed p-6 text-center rounded-lg cursor-pointer hover:border-[#304BA0]"
        >
          <span className="text-gray-500"><img className='mx-auto' src={Add_photo} alt="" /> </span>
        </div>
        <input
          type="file"
          accept="image/*,video/*"
          ref={fileInputRef}
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title your review</label>
        <input
          type="text"
          placeholder="Add your title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#304BA0]"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Title your review</label>
        <textarea
          placeholder="What did you like or dislike?"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none  focus:border-[#304BA0]"
          rows="4"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-[#304BA0] text-white py-3 rounded-md font-semibold hover:bg-[#3e5fc5] focus:outline-none"
      >
        Submit
      </button>
    </div>
  );
};

export default ReviewForm;
