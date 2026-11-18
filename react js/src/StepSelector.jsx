import React from 'react'

function StepSelector() { 

    const listStyle = {
        backgroundColor : 'purple',
        color : 'white',
        borderRadius : '50%',
        padding : '5px 15px'

    }

    const btnStyle = {
        display : "flex",
        gap : '10px',
    }
  return (
    <div className='container'>
<ul>
    <li style={listStyle}>1</li>
    <li style={listStyle}>2</li>
    <li style={listStyle}>3</li>
</ul>

<div className="secondItem">
<h1>Step 1 : Learn React JS</h1>
</div>

<div className="btn" style={btnStyle}>
    <button>prev</button>
    <button>next</button>
</div>

    </div>
  )
}

export default StepSelector