import React, { useState } from "react";
import Nav from "./Nav";
import PiggyTiles from "./PiggyTiles";
import FilterAndSort from "./FilterAndSort";

import hogs from "../porkers_data";

function App() {

	const [isHogs, setHogs] = useState(hogs);
	const [searchNameQuery, setSearchNameQuery] = useState("");
	const [searchWeightQuery, setSearchWeightQuery] = useState("");


	function handleOnNameChange(e) { 
		setSearchNameQuery(e.target.value);
	}

	const searchResults = isHogs.filter((hog) => {
		return hog.name.toLowerCase().includes(searchNameQuery.toLowerCase());
	})

	function handleOnWeightChange(e) { 
		console.log(`weight change: ${e.target.value}`);
	}

	return (
		<div className="App">
			<Nav />
			<FilterAndSort 
				handleOnNameChange={handleOnNameChange}
			/>
			<PiggyTiles 
				hogs={searchResults}
			/>
		</div>
	);
}

export default App;
