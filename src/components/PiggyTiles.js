import React from 'react';
import PigTile from './PigTile';

function PiggyTiles({ hogs, handleHidePiggy }) {

    const pigTileCollection = hogs.map((hog) => {
        return (
        <div className="ui three stackable cards">
                <PigTile
                    key={hog.name}
                    name={hog.name}
                    specialty={hog.specialty}
                    greased={hog.greased}
                    weight={hog.weight}
                    medal={hog["highest medal achieved"]}
                    image={hog.image}
                    handleHidePiggy={handleHidePiggy}
                />
        </div>
        )
    })

    return (
        <div>
            {pigTileCollection}
        </div>
    )
}

export default PiggyTiles;