import React, { useState } from "react";
import Nav from "./Nav";
import PiggyTiles from "./PiggyTiles";
import FilterAndSort from "./FilterAndSort";

import hogs from "../porkers_data";

function App() {

	const [isHogs, setHogs] = useState(hogs);
	const [searchQuery, setSearchQuery] = useState("");
	const [isChecked, setChecked] = useState(false)
	const [sortBy, setSortBy] = useState("")

	function handleOnNameChange(e) { 
		setSearchQuery(e.target.value);
	}

	function handleOnGreaseSelect() {
		setChecked(!isChecked)
		isChecked ? console.log("true") : console.log("false")
	}

	const searchResults = isHogs
		.filter ((hog) => (isChecked ? hog.greased : true) && (hog.name.toLowerCase().includes(searchQuery.toLowerCase())))
		.sort((hog1, hog2) => {
			if (sortBy === "Weight") {
				return hog1.weight - hog2.weight;
			} else if (sortBy === "Name") {
				return hog1.name.localeCompare(hog2.name)
			}
		})


	return (
		<div className="App">
			<Nav />
			<FilterAndSort 
				handleOnNameChange={handleOnNameChange}
				handleOnGreaseSelect={handleOnGreaseSelect}
				onChangeSortBy={setSortBy}
			/>
			<PiggyTiles 
				hogs={searchResults}
			/>
		</div>
	);
}

export default App;
