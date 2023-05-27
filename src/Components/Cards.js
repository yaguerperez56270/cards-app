import React from 'react'
import Card from "./Card";
import image1 from "../assets/i1.jpg";
import image2 from "../assets/i2.jpg";
import image3 from "../assets/i3.jpg";

const cards = [
  
  {
    id:1,
    title:'Curso de React',
    image: image1,
    instructor: "Benito Sammuel"

  },

  {
    id:2,
    title:'Curso de Java',
    image: image2,
    instructor: "Jair Palma"
  },

  {
    id:3,
    title:'Curso de Doker',
    image: image3,
    instructor: "Valentin Jimenez"
  },


]



export default function Cards() {
  <h3>Yair Uriel Perez Mendez</h3>
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
      { 
        cards.map(c =>(
      <div className="col-md-4" key={cards.id}>
          <Card
          key={c.id}
          id={c.id}
          title={c.title}
          image={c.image}
          instructor={c.instructor}
          />
      </div>
      ))
      }
      </div>     
    </div>
  );
}
