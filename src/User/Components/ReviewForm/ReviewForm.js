import React, { useState, useRef } from 'react';
import Add_photo from "../../../Assets/Icons/add_a_photo.svg";
import ProductImg from "../../../Assets/Top Product image/pngwing.com (14) 1.png";
import Close from "../../../Assets/Icons/close.png";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [previews, setPreviews] = useState([]); // State to store previews
  const fileInputRef = useRef(null);

  const handleRating = (rate) => setRating(rate);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ rating, title, review, previews });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  const removePreview = (index) => {
    setPreviews(previews.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-xl border p-10 text-justify max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <img src={ProductImg} alt="Product" className="w-12 h-12 object-cover rounded mr-4" />
        <div>
          <h2 className="font-medium text-justify sm:w-[213px] text-sm">Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet</h2>
        </div>
        <button className="ml-auto text-gray-500 hover:text-gray-800">
         <img className='w-6 h-6 ' src={Close} alt="Close" />
        </button>
      </div>

      <h3 className="mb-4 sm:text-[14px] sm:leading-[18px] sm:font-medium">How would you rate it?</h3>
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
        <label className="block mb-2 text-sm font-medium">Upload a video or photo</label>
        <div className="flex gap-4 mb-4">
          {previews.map((preview, index) => (
            <div key={index} className="relative">
              <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded-md" />
              <button 
                onClick={() => removePreview(index)} 
                className="absolute top-0 right-0 text-white bg-black bg-opacity-50 p-1 rounded-full">
                ✕
              </button>
            </div>
          ))}
          <div
            onClick={triggerFileUpload}
            className="border-2 border-dashed p-6 text-center rounded-lg cursor-pointer hover:border-[#304BA0] flex justify-center items-center w-full h-24"
          >
            <span className="text-gray-500"><img className='mx-auto' src={Add_photo} alt="Add" /> </span>
          </div>
        </div>
        <input
          type="file"
          accept="image/*,video/*"
          ref={fileInputRef}
          onChange={handleFileUpload}
          className="hidden"
          multiple // Allow multiple file selection
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Title your review</label>
        <input
          type="text"
          placeholder="Add your title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#304BA0]"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium">Title your review</label>
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
