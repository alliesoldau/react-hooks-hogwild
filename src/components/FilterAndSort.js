import React from 'react';

function FilterAndSort({ handleOnNameChange, handleOnWeightChange }) {

    return (
        <div className="filter">
            <h2>Filter by...</h2>
            <form className="filterName">
                <label>Filter by name</label>
                    <input type="text" onChange={handleOnNameChange}></input>
                    <br></br>
            </form>
        </div>
    )
}

export default FilterAndSort;