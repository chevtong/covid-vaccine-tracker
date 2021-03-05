import React from 'react'

function Selections({setCategory}) {




    return (
        <div>
            <select onChange={e => setCategory(e.currentTarget.value)} >

                <option value="all">Shown By Catergories</option>
                <option value="region">By Region</option>
                <option  value="age">By Age</option>
                <option  value="sex">By Gender</option>
            </select>
        </div>
    )
}

export default Selections
