import React, { useState } from 'react';
import './styles/Footer.css';

const Footer = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que se recargue la página
    // Mostrar la notificación
    alert('Información recibida');
    // Limpiar el formulario
    setNombre('');
    setTelefono('');
    setMensajeEnviado(true);
    // Puedes agregar aquí la lógica para enviar los datos del formulario si es necesario
  };

  return (
    <footer className="footer">

      {/* Lado Izquierda */}
      <div className="left-section">
        <h2><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-address-book" width="28" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
          <path d="M10 16h6" />
          <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M4 8h3" />
          <path d="M4 12h3" />
          <path d="M4 16h3" />
        </svg>Contacto</h2>
        <p>Correo: <a href="mailto:chepechay16@gmail.com">chepechay16@gmail.com</a></p>
        <p>Número: <a href="https://wa.me/37914995">+502 37914995</a></p>
      </div>

      {/* Lado Central */}
      <div className="middle-section">
        <img src="/Logo1.png" alt="Logo" />
      </div>

      {/* Lado Derecho */}
      <div className="right-section">
        <h2><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-question" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.467 0 .896 .16 1.236 .428" />
          <path d="M19 22v.01" />
          <path d="M19 19a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
        </svg>Formulario</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
          <button type="submit">Enviar</button>
        </form>
        {mensajeEnviado && <p className="success-message">Mensaje enviado exitosamente</p>}
      </div>

    </footer>
  );
};

export default Footer;