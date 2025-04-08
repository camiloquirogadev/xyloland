import React from 'react';
import './Testimonials.css'; 

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonial">
        <p>"Gracias a Xylo, nuestra eficiencia ha aumentado un 40% en solo 3 meses."</p>
        <cite>- Cliente Satisfecho</cite>
      </div>
    </section>
  );
}

export default Testimonials;
