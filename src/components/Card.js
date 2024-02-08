import React, { useState } from "react";
import {
  deleteButton,
  editButton,
  emailIcon,
  filledLikeButton,
  likeButton,
  phoneIcon,
  websiteIcon,
} from "../utils/constants";
import Modal from "./Modal";

const Card = ({ card, index, setCardsData }) => {
  const [modalData, setModalData] = useState(undefined);
  const toggleLike = (index) => {
    setCardsData((prevData) => {
      const newData = [...prevData];
      newData[index].liked = !newData[index].liked;
      return newData;
    });
  };

  const handleDelete = (index) => {
    setCardsData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };
  return (
    <div key={card.id} className="card">
      <div className="card-image">
        <img src={card.imageUrl} alt={card.name} />
      </div>
      <div className="card-details">
        <h3>{card.name}</h3>
        <div className="contact-info">
          <div className="contact-item">
            <span>{emailIcon}</span> <p className="ml-10">{card.email}</p>
          </div>
          <div className="contact-item">
            <span>{phoneIcon}</span> <p className="ml-10">{card.phone}</p>
          </div>
          <div className="contact-item">
            <span>{websiteIcon}</span>
            <p className="ml-10"> {card.website}</p>
          </div>
        </div>
      </div>
      <ul className="card-icons">
        <li>
          <span>
            <button
              className="icon-btn like-icon"
              onClick={() => toggleLike(index)}
            >
              {card.liked ? <i>{filledLikeButton}</i> : <i>{likeButton}</i>}
            </button>
          </span>
        </li>
        <li>
          <span>
            <button className="icon-btn" onClick={() => setModalData(card)}>
              <i>{editButton}</i>
            </button>
          </span>
        </li>
        <li>
          <span>
            <button className="icon-btn" onClick={() => handleDelete(index)}>
              <i>{deleteButton}</i>
            </button>
          </span>
        </li>
      </ul>
      {modalData && (
        <Modal
          data={modalData}
          setData={setModalData}
          index={index}
          setCardsData={setCardsData}
        />
      )}
    </div>
  );
};

export default Card;
