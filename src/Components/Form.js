import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handleChange= (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  newReservation = (event) => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({name:'', date: '', time: '', number: 0})
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Please enter your name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
          placeholder='Please enter the date ex: 00/00'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
      
        <input
          type='text'
          placeholder='Please enter time ex: 00:00'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='number'
          placeholder='Enter total of guest'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />

        <button className='reserv-btn' onClick={event => this.newReservation(event)}>Submit !</button>
      </form>
    )
  }
}

export default Form