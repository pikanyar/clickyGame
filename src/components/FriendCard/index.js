import React from "react";
import "./style.css";

function FriendCard(props) {
  const { imageSelect, image, name, selected } = props;
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => imageSelect(selected)} alt={name} src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>

        </ul>
      </div>

    </div>
  );
}

export default FriendCard;
