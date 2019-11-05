import React from 'react'
import './StartButton.css'
import { withRouter } from 'react-router-dom'

function StartButton(props){

    const handleClick = () =>{
        console.log(props.history)
        props.history.push('/landingpage')
    }
    return(
        <div className='container' onClick={handleClick}>
            <span className='pulse-button'>Embark</span>
        </div>
    )
}

export default StartButton