import React from "react";
import { FaStar } from "react-icons/fa"; // You can use Font Awesome or any other icon library

const StarRating = ({ rating, onRatingChange }) => {
  // Create an array with 5 elements for stars
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  // Handle the click event to update the rating
  const handleStarClick = (newRating) => {
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div>
      {stars.map((star) => (
        <FaStar
          key={star}
          size={24}
          onClick={() => handleStarClick(star)} // Change the rating when star is clicked
          style={{
            cursor: "pointer",
            color: star <= rating ? "#ffc107" : "#e4e5e9", // Fill stars up to the current rating
          }}
        />
      ))}
    </div>
  );
};

export default StarRating;
