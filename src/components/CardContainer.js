import React, { useEffect, useState } from "react";
import Card from "./Card";
import { staticCardsData } from "../utils/constants";
import Spinner from "./Spinner";

const CardContainer = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    setCardsData(staticCardsData);
  }, []);
  return (
    <div className="card-gallery">
      {cardsData.length > 0 ? (
        <>
          {cardsData.map((card, index) => (
            <Card
              card={card}
              index={index}
              setCardsData={setCardsData}
              key={card.id}
            />
          ))}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CardContainer;
