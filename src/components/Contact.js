import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el formulario
    alert(`Formulario enviado por ${name}`);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Tu Nombre" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
        <input 
          type="email" 
          placeholder="Tu Correo" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <button type="submit" className="cta-btn">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
