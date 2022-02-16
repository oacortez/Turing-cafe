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

  addReservation = (newReservation) => {
    this.setState({allReservations: [...this.state.allReservations, newReservation]})
  }

  cancelReservation = (id) => {
    const cancelReservation = this.state.allReservations.filter(valueId => valueId.id !== id)

    this.setState({allReservations: cancelReservation})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        {!this.state.allReservations.length ? <h1>Please add a new reservation</h1> :<CardContainer reservations={this.state.allReservations} cancelReservation={this.cancelReservation}/>}
         
      </div>
    )
  }
}

export default App;
