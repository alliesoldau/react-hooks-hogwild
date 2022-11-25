import React, { useState } from "react";
import Nav from "./Nav";
import PiggyTiles from "./PiggyTiles";
import FilterAndSort from "./FilterAndSort";

import hogs from "../porkers_data";

function App() {

	const [isHogs, setHogs] = useState(hogs);
	const [searchQuery, setSearchQuery] = useState("");
	const [isChecked, setChecked] = useState(false)

	function handleOnNameChange(e) { 
		setSearchQuery(e.target.value);
	}

	function handleOnGreaseSelect() {
		setChecked(!isChecked)
		isChecked ? console.log("true") : console.log("false")
	}

	const searchResults = isHogs
		.filter ((hog) => (isChecked ? hog.greased : true) && (hog.name.toLowerCase().includes(searchQuery.toLowerCase())));


	return (
		<div className="App">
			<Nav />
			<FilterAndSort 
				handleOnNameChange={handleOnNameChange}
				handleOnGreaseSelect={handleOnGreaseSelect}
			/>
			<PiggyTiles 
				hogs={searchResults}
			/>
		</div>
	);
}

export default App;
