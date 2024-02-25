import React from 'react'
import './styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      {/* Lado Izquierda */}
      <div className="left-section">
        <h2>Contacto</h2>
        <p>Correo: <a href="mailto:chepechay16@gmail.com">chepechay16@gmail.com</a></p>
        <p>Número: <a href="https://wa.me/37914995">+502 37914995</a></p>
      </div>

      {/* Lado Central */}
      <div className="middle-section">
        <img src="/Logo1.png" alt="Logo" />
      </div>

      {/* Lado Derecho */}
      <div className="right-section">
        <h2>Form</h2>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required />
          <button type="submit">Enviar</button>
          <p className="success-message">Mensaje enviado exitosamente</p>
        </form>
      </div>

    </footer>
  );
};

export default Footer;