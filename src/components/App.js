import React, { useState } from "react";
import Nav from "./Nav";
import PiggyTiles from "./PiggyTiles";
import FilterAndSort from "./FilterAndSort";

import hogs from "../porkers_data";

function App() {

	const [isHogs, setHogs] = useState(hogs);

	return (
		<div className="App">
			<Nav />
			<FilterAndSort 
				// TO DO: make a filter const for when you select the silter
				// and feed that to PiggyTiles instead of isHogs
				// make a drop down on the Filter and Sort comp 
				// call a callback function to filter
			/>
			<PiggyTiles 
				hogs={isHogs}
			/>
		</div>
	);
}

export default App;
