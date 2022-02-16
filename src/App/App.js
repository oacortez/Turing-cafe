import React, { Component } from 'react';
import CardContainer from '../Components/CardContainer'
import Form from '../Components/Form';
import {fetchData, postReservation, deleteReservation} from '../ApiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: []
    }
  }

  componentDidMount = () => {
      fetchData()
      .then(data => this.setState({ allReservations: data}))
  }

  addReservation = (newReservation) => {
    this.setState({allReservations: [...this.state.allReservations, newReservation]})
    postReservation(newReservation)
  }

  cancelReservation = (id) => {
    const cancelReservation = this.state.allReservations.filter(valueId => valueId.id !== id)

    this.setState({allReservations: cancelReservation})
    deleteReservation(id)
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
