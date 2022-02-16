import React, { Component } from 'react';
import CardContainer from '../Components/CardContainer'
import Form from '../Components/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({ allReservations: data}))
  }

  // cancelReservation = (id) => {
  //   const cancelReservation = 
  // }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <CardContainer reservations={this.state.allReservations}/> 
      </div>
    )
  }
}

export default App;
