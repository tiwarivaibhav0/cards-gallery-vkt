import React, { useState } from "react";
import Card from "./Card";
import { staticCardsData } from "../utils/constants";

const CardContainer = () => {
    const [cardsData,setCardsData] = useState(staticCardsData)

	return (
		<div className="card-gallery">
			{cardsData.map((card) => (
				<Card card={card} />
			))}
		</div>
	);
};

export default CardContainer;
