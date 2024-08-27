import { useState } from "react";
import "./starRating.css";

const StarRating = ({ rating, onRatingChange }) => {
  const [hovered, setHovered] = useState(null);

  const handleClick = (value) => {
    onRatingChange(value);
  };

  const handleMouseOver = (value) => {
    setHovered(value);
  };

  const handleMouseOut = () => {
    setHovered(null);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`star ${value <= (hovered || rating) ? "filled" : ""}`}
          onClick={() => handleClick(value)}
          onMouseOver={() => handleMouseOver(value)}
          onMouseOut={handleMouseOut}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
