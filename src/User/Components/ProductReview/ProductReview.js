import React, { useState } from 'react';
import PDPreviewedDetails from './PDPreviewedDetails';
import ReviewForm from './ReviewForm';

function ProductReview() {
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');

  return (
    <div className="container mx-auto">
    
      <PDPreviewedDetails title={title} review={review} />

      <ReviewForm setTitle={setTitle} setReview={setReview} />
    </div>
  );
}

export default ProductReview;
