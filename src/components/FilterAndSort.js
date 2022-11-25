import React from 'react';

function FilterAndSort({ handleOnNameChange, handleOnGreaseSelect }) {

    return (
        <div className="filter">
            <h2>Filter by...</h2>
            <form className="filterName">
                <label>Filter by Name</label>
                    <input type="text" onChange={handleOnNameChange}></input>
                    <br></br>
                <label>Filter by Greased?</label>
                    <input type="checkbox" onChange={handleOnGreaseSelect}></input>
            {/* TO DO: Sort by name or weight */}
            </form>
        </div>
    )
}

export default FilterAndSort;