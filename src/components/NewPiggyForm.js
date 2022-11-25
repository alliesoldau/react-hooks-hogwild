import React, { useState } from 'react';

function NewPiggyForm({ onNewPiggyFormSubmit }) {

    const [name, setName] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [greased, setGreased] = useState(false)
    const [weight, setWeight] = useState(0)
    const [medal, setMedal] = useState("")
    const [image, setImage] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        onNewPiggyFormSubmit({ name, specialty, greased, weight, medal, image })
        setName("")
        setSpecialty("")
        setGreased(false)
        setWeight(0)
        setMedal("")
        setImage("")
    }

    return(
        <div className="newPiggyFormWrapper">
            <h3>Add a new piggy</h3>
            <form 
                className="ui form"
                onSubmit={handleSubmit}
            >   
                <div className="field">
                    <label>Name
                        <input 
                            type="text" 
                            value={name} 
                            placeholder="Bacon"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className="field">
                <label>Specialty
                    <input 
                        type="text" 
                        value={specialty}
                        placeholder="Being tasty"
                        onChange={(e) => setSpecialty(e.target.value)}
                    />
                </label>
                </div>
                <div className="field">
                <label>Greased
                    <select 
                        value={greased} 
                        onChange={(e) => setGreased(e.target.value)}>
                            <option>true</option>
                            <option>false</option>
                    </select>  
                </label>                  
                </div>
                <div className="field">
                <label>Weight
                    <input 
                        type="number" 
                        value={weight}
                        placeholder="9000000lbs"
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </label>
                </div>
                <div className="field">
                <label>Medal
                    <input 
                        type="text" 
                        value={medal}
                        placeholder="Plutonium"
                        onChange={(e) => setMedal(e.target.value)}
                    />
                </label>
                </div>
                <div className="field">
                <label>Image
                    <input 
                        type="text" 
                        value={image}
                        placeholder="piggypic.com"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                </div>
                <input type="submit" className="ui basic black button"/>
            </form>
        </div>
    )
}

export default NewPiggyForm;