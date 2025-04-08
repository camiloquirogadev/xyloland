import React, { useState, useEffect } from 'react';
import './Services.css'; 

// Componente individual de cada servicio
function Service({ title, description }) {
  const [isVisible, setIsVisible] = useState(false);

  // Hook para controlar la visibilidad de la tarjeta al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const serviceElement = document.getElementById(title);
      const rect = serviceElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // Si entra en la vista, activamos la clase visible
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del evento de scroll
    return () => window.removeEventListener('scroll', handleScroll);
  }, [title]);

  return (
    <div
      id={title}
      className={`service ${isVisible ? 'visible' : ''}`}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Componente de todos los servicios
function Services() {
  return (
    <section id="services" className="services">
      <h2>Nuestros Servicios</h2>
      <Service title="Automatización de Email Marketing" description="Optimiza las comunicaciones con tus clientes." />
      <Service title="Generación de Leads" description="Atrae y convierte clientes potenciales." />
      <Service title="Análisis de Datos" description="Toma decisiones informadas con herramientas de análisis." />
    </section>
  );
}

export default Services;
