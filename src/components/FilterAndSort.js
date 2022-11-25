import React from 'react';

function FilterAndSort({ handleOnNameChange, handleOnGreaseSelect, onChangeSortBy }) {

    function handleSortBy(event) {
        onChangeSortBy(event.target.value)
    }
    
    return (
        <div className="filter">
            <h2>Filter by...</h2>
            <form className="filterName">
                <label>Filter by Name</label>
                    <input type="text" onChange={handleOnNameChange}></input>
                    <br></br>
                <label>Filter by Greased?</label>
                    <input type="checkbox" onChange={handleOnGreaseSelect}></input>
                    <br></br>
                <label>Sort by...</label>
                <select onChange={handleSortBy}>
                    <option>Name</option>
                    <option>Weight</option>
                </select>
            </form>
        </div>
    )
}

export default FilterAndSort;