import React from "react";
import "./stripeFakeCard.style.scss";

const StripeFakeCard = ({ type, cardNumber, logo }) => (
  <div className="card-container">
    <h3>{type}</h3>
    <span> {cardNumber}</span>
    <div>
      <span>
        <strong>Expires </strong> 12/2030
      </span>
      <span>CVC: 123</span>

      <img
        alt="credit-card"
        class="card__logo"
        width="40px"
        height="40px"
        src={logo}
      />
    </div>
  </div>
);

export default StripeFakeCard;
