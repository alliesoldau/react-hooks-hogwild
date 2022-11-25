import React, { useState } from 'react';

function PigTile({ name, specialty, greased, weight, medal, image, handleHidePiggy}) {
    
    const [isToggled, setIsToggled] = useState(true)
    const [isSpecialty, setSpecialty] = useState("")
    const [isGreased, setGreased] = useState("")
    const [isWeight, setWeight] = useState("")
    const [isMedal, setMedal] = useState("")
    
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
        // console.log(name)
        handleHidePiggy(name)
    }

    return (
        <div className="ui card" onClick={toggleCardDisplay}>
            <div className="image">
                <img src={image}/>
            </div>
            <div className="name">{name}</div>
            <div className="specialty">{isSpecialty}</div>
            <div className="greased">{String(isGreased)}</div>
            <div className="weight">{isWeight}</div>
            <div className="medal">{isMedal}</div>
            <button onClick={onHidePiggy}>Hide</button>
        </div>
    )
}

export default PigTile;