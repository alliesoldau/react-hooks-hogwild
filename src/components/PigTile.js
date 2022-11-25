import React, { useState } from 'react';

function PigTile({ name, specialty, greased, weight, medal, image, handleHidePiggy}) {
    
    const [isToggled, setIsToggled] = useState(true)
    const [isSpecialty, setSpecialty] = useState("")
    const [isGreased, setGreased] = useState("")
    const [isWeight, setWeight] = useState("")
    const [isMedal, setMedal] = useState("")
    const [isHidden, setIsHidden] = useState(false)
    
    function toggleCardDisplay() {
        setIsToggled(!isToggled)
        if (isToggled === true) {
                setSpecialty(specialty)
                setGreased(greased)
                setWeight(weight)
                setMedal(medal)
        } else {
                setSpecialty("")
                setGreased("")
                setWeight("")
                setMedal("")
        }
    }

    function onHidePiggy() {
        setIsHidden(true);
    }

    if (isHidden) return null;

    return (
        <div className="ui card eight wide column pigTile" onClick={toggleCardDisplay}>
            <div className="image">
                <img src={image}/>
            </div>
            <h3>{name}</h3>
            <div className="meta">{isSpecialty}</div>
            <div className="meta">{String(isGreased)}</div>
            <div className="meta">{isWeight}</div>
            <div className="meta">{isMedal}</div>
            <div className="content">
                <button className="ui basic pink button" onClick={onHidePiggy}>Hide</button>
            </div>
       </div>
    )
}

export default PigTile;