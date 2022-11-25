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
        <div>
            <h4>Add a new piggy</h4>
            <form 
                className="newPiggyForm"
                onSubmit={handleSubmit}
            >
                <label>Name
                    <input 
                        type="text" 
                        value={name} 
                        placeholder="Bacon"
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br></br>
                <label>Specialty
                    <input 
                        type="text" 
                        value={specialty}
                        placeholder="Being tasty"
                        onChange={(e) => setSpecialty(e.target.value)}
                    />
                </label>
                <br></br>
                <label>Greased
                    <select 
                        value={greased} 
                        onChange={(e) => setGreased(e.target.value)}>
                            <option>true</option>
                            <option>false</option>
                    </select>  
                </label>                  
                <br></br>
                <label>Weight
                    <input 
                        type="number" 
                        value={weight}
                        placeholder="9000000lbs"
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </label>
                <br></br>
                <label>Medal
                    <input 
                        type="text" 
                        value={medal}
                        placeholder="Plutonium"
                        onChange={(e) => setMedal(e.target.value)}
                    />
                </label>
                <br></br>
                <label>Image
                    <input 
                        type="text" 
                        value={image}
                        placeholder="piggypic.com"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <br></br>
                <input type="submit" value="Add Piggy" />
            </form>
        </div>
    )
}

export default NewPiggyForm;