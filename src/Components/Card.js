import React from 'react'

<h3>Yair Uriel Perez Mendez</h3>
export default function Card({id, title, image, instructor}) {
  return (
    <div className='card text-center bg-dark'>
      <div className='card-body text light'>
        <img src={image} alt=""></img>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          Instructor:{instructor} </p>
        <button type="button" class="btn btn-secondary">Ir al sitio</button>
        </div>
    </div>


  )
}
