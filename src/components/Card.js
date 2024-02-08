import React from "react";
import {
	deleteButton,
	editButton,
	emailIcon,
	filledLikeButton,
	likeButton,
	phoneIcon,
	websiteIcon,
} from "../utils/constants";

const Card = ({ card }) => {
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
						<button className="icon-btn">
							{card.liked ? <i>{filledLikeButton}</i> : <i>{likeButton}</i>}
						</button>
					</span>
				</li>
				<li>
					<span>
						<button className="icon-btn">
							<i>{editButton}</i>
						</button>
					</span>
				</li>
				<li>
					<span>
						<button className="icon-btn">
							<i>{deleteButton}</i>
						</button>
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Card;
