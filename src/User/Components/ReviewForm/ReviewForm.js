import React, { useState, useRef } from 'react';
import Add_photo from "../../../Assets/Icons/add_a_photo.svg";
import ProductImg from "../../../Assets/Top Product image/pngwing.com (14) 1.png";
import Close from "../../../Assets/Icons/close.png";

function ReviewForm({ setTitle, setReview }) {
  const [rating, setRating] = useState(0);
  const [titleInput, setTitleInput] = useState(''); // Local state for title input
  const [reviewInput, setReviewInput] = useState(''); // Local state for review input
  const [previews, setPreviews] = useState([]);
  const fileInputRef = useRef(null);

  const handleRating = (rate) => setRating(rate);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle=titleInput;
    setReview=reviewInput; 
    console.log({ rating, title: titleInput, review: reviewInput, previews });
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
          <img className='w-6 h-6' src={Close} alt="Close" />
        </button>
      </div>

      <h3 className="mb-4 sm:text-[14px] sm:leading-[18px] sm:font-medium">How would you rate it?</h3>
      <div className="flex mb-6">
        {[1, 2, 3, 4, 5].map((rate) => (
          <span
            key={rate}
            className={`cursor-pointer text-2xl ${rating >= rate ? 'text-[#304BA0]' : 'text-[#EDEDED]'}`}
            onClick={() => handleRating(rate)}
          >
            ★
          </span>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Title your review</label>
        <input
          type="text"
          placeholder="Add your title here"
          value={titleInput} // Use local state for input
          onChange={(e) => setTitleInput(e.target.value)} // Update local state on input change
          className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#304BA0]"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium">Write your review</label>
        <textarea
          placeholder="What did you like or dislike?"
          value={reviewInput} // Use local state for input
          onChange={(e) => setReviewInput(e.target.value)} // Update local state on input change
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
}

export default ReviewForm;
