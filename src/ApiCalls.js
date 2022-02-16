const fetchData = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => response.json())
}

const postReservation = (newReservation) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method:'POST',
    body: JSON.stringify({
      name: newReservation.name,
      date: newReservation.date,
      time: newReservation.time,
      number: parseInt(newReservation.number)
    }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(response => response.json())
}

const deleteReservation = (id) => {
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(response => response.json())
}

export {fetchData, postReservation, deleteReservation}