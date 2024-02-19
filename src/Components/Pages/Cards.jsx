import React, { useState } from "react";
import "./Cards.css";

const Cards = ({ item, handleitem }) => {
  const { Categories, Name, Price, Img, discountPrice } = item;

  const discountPercentage = Math.round(
    ((Price - discountPrice) / Price) * 100
  );

  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="main">
      <div className="cards">
        <div className="images">
          <img src={Img} alt={Name} />
        </div>

        <div className="title">
          <h3>{Categories}</h3> <br />
          <h4>{Name}</h4>
          <div class="card-price">
            <span>Price <i class="fa-solid fa-indian-rupee-sign"></i>{discountPrice}</span> &nbsp;
            <span class="strike"><i class="fa-solid fa-indian-rupee-sign"></i> {Price}</span> &nbsp;
            <span className="discount"> ({discountPercentage}% Offer)</span>
          </div>
          <button className="btn" onClick={() => handleitem(item)}>
            Add to Cart <i class="fa-solid fa-cart-shopping"></i>
          </button>&nbsp;
          <div
            class="show-button"
            className={`show-button ${isLiked ? "liked" : ""}`}
            onClick={handleLikeClick}
          >
            {isLiked ? (
              <i class="fa-solid fa-heart"></i>
            ) : (
              <i class="fa-regular fa-heart"></i>
            )}
          </div>&nbsp;
          <button className="btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
