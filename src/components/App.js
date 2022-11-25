import React, { useState } from "react";
import Nav from "./Nav";
import PiggyTiles from "./PiggyTiles";
import FilterAndSort from "./FilterAndSort";
import NewPiggyForm from "./NewPiggyForm";

import hogs from "../porkers_data";

function App() {

	const [isHogs, setHogs] = useState(hogs);
	const [searchQuery, setSearchQuery] = useState("");
	const [isChecked, setChecked] = useState(false)
	const [sortBy, setSortBy] = useState("")

	function handleNewPiggy(newPiggy) {
		setHogs([...hogs, newPiggy]);
	}

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
		<div className="ui grid container App">
			 <div className="sixteen wide column centered">
        		<Nav />
      		</div>
			<div className="sixteen wide column centered">
				<FilterAndSort 
					handleOnNameChange={handleOnNameChange}
					handleOnGreaseSelect={handleOnGreaseSelect}
					onChangeSortBy={setSortBy}
				/>
			</div>
			<NewPiggyForm
				onNewPiggyFormSubmit={handleNewPiggy}
			/>
			<div className="sixteen wide column centered">
				<PiggyTiles 
					hogs={searchResults}
				/>
			</div>
		</div>
	);
}

export default App;
