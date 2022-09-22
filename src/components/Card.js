import React from "react";

export default function Card(props) {
	return (
		<div className="card">
			<img
				className="cardPhoto"
				src={require(`../images/${props.image}`)}
				alt=""
			/>
			<div className="cardDetails">
				<div className="location">
					<img src={require("../images/Fill 219.png")} alt="" />
					<p>
						{props.country}
						<a className="googleMaps" target="_blank" href={props.link}>
							View on Google Maps
						</a>
					</p>
				</div>
				<h2>{props.place}</h2>
				<p className="travelPeriod">{props.travelPeriod}</p>
				<p>{props.description}</p>
			</div>
		</div>
	);
}
