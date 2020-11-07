import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, image, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${linkUrl}`)}
  >
    <div style={{ backgroundImage: `url(${image})` }} className="background" />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
