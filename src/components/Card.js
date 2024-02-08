import React from "react";
import { emailIcon, phoneIcon, websiteIcon } from "../utils/constants";

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
						<button
							style={{
								background: "none",
								border: "none",
								cursor: "pointer",
								outline: "none",
							}}
						>
							<i
								aria-label="icon: heart"
								class="anticon anticon-heart"
								style={{ color: "rgb(255, 0, 0)", fontSize: "20px" }}
							>
								<svg
									viewBox="64 64 896 896"
									class=""
									data-icon="heart"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
								</svg>
							</i>
						</button>
					</span>
				</li>
				<li>
					<span>
						<button
							style={{
								background: "none",
								border: "none",
								cursor: "pointer",
								outline: "none",
							}}
						>
							<i
								aria-label="icon: heart"
								class="anticon anticon-heart"
								style={{ color: "rgb(255, 0, 0)", fontSize: "20px" }}
							>
								<svg
									viewBox="64 64 896 896"
									class=""
									data-icon="heart"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
								</svg>
							</i>
						</button>
					</span>
				</li>
				<li>
					<span>
						<button
							style={{
								background: "none",
								border: "none",
								cursor: "pointer",
								outline: "none",
							}}
						>
							<i
								aria-label="icon: heart"
								class="anticon anticon-heart"
								style={{ color: "rgb(255, 0, 0)", fontSize: "20px" }}
							>
								<svg
									viewBox="64 64 896 896"
									class=""
									data-icon="heart"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
								</svg>
							</i>
						</button>
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Card;
