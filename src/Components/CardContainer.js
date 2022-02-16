import React from 'react';
import Card from './Card';

const CardContainer = ({reservations, cancelReservation}) => {

  const displayCards = reservations.map(data => {
    return (
      <Card
        id={data.id}
        key={data.id}
        name={data.name}
        date={data.date}
        time={data.time}
        number={data.number}
        deleteReservation={cancelReservation}
      />
    )
  })

  return (
    <section className='card-container'>
      {displayCards}
    </section>
  )
}

export default CardContainer;