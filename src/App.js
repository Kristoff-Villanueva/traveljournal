import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/Card";
import data from "./travelData";

function App() {
	const cards = data.map((item) => {
		return (
			<Card
				key={item.id}
				country={item.country}
				travelPeriod={item.travelPeriod}
				description={item.description}
				place={item.place}
				image={item.image}
				link={item.link}
			/>
		);
	});

	return (
		<div className="App">
			<Navbar />
			{cards}
		</div>
	);
}

export default App;
