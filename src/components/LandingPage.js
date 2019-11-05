import React, { Component } from 'react'
import './Home.css'
import Quote from './Quote'
import Todo from './Todo'

export default class LandingPage extends Component {
    state = {
        quotes: '',
        todos: []
    }

    componentDidMount(){
        const id = Math.floor(Math.random() * 104 + 1)
        console.log(id)
        fetch(`http://localhost:3001/quotes/${id}`)
            .then(res => res.json())
            .then(quote => this.setState({ quotes: quote.quote }))
    }
    render() {
        return (
            <div className='landing-page'>
                <img src="https://i.imgur.com/MHqnMFV.png" alt="title" className="title"></img>
                <Quote quote={this.state.quotes}/>
                <Todo />
            </div>
        )
    }
}
