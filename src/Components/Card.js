import React from 'react'
import './Card.css';

const Card = ({id, name, date, time, number, deleteReservation}) => {

  return (
    <section className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guest: {number}</p>
      <button onClick={() => deleteReservation(id)}>Cancel</button>
    </section>
  )
}

export default Card