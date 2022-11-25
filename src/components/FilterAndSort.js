import React from 'react';

function FilterAndSort({ handleOnNameChange, handleOnGreaseSelect, onChangeSortBy }) {

    function handleSortBy(event) {
        onChangeSortBy(event.target.value)
    }
    
    return (
        <div className="filterWrapper">
            <div className="four wide column">
                <div className="ui form">
                    <h3>Filter by...</h3>
                        <div className="field">
                            <label>Filter by Name</label>
                                <input type="text" onChange={handleOnNameChange}></input>
                        </div>
                        <div className="field">
                            <label>Filter by Greased?</label>
                                <input type="checkbox" onChange={handleOnGreaseSelect} className="ui toggle checkbox"></input>
                        </div>
                        <div className="field">
                            <label>Sort by...</label>
                            <select onChange={handleSortBy} className="ui selection dropdown">
                                <option>Name</option>
                                <option>Weight</option>
                            </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterAndSort;