import React, { Component } from 'react'
import './Quote.css'

export default class Quote extends Component {
    state = {
        quote: ''
    }
    render() {
        return (
            <div className='quote-container'>
                <h3>"{this.props.quote}"</h3>
            </div>
        )
    }
}
