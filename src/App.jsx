import React, { useState } from 'react';
import './custom-invitation.css'; 
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';

export default function App() {
  // Estado para controlar si la invitación está abierta
  const [isOpen, setIsOpen] = useState(false);

  const invitationData = {
    host: 'TE INVITA A CELEBRAR',
    celebrant: 'Rodrigo Martínez',
    event: 'XXIII Aniversario',
    date: '15 JUNIO 2025',
    time: '8:00 PM',
    timeDetail: 'EN PUNTO',
    location: 'SALÓN IMPERIAL',
    address: 'Av. Insurgentes Sur 1234, CDMX',
    deadline: 'Favor de confirmar antes del 8 de junio de 2025',
    whatsapp: '+52 55 1234 5678',
    mapLink: 'https://maps.app.goo.gl/exampleMapLink' 
  };

  return (
    <div className="custom-invitation-container">
      
      {!isOpen ? (
        /* --- PANTALLA DE BIENVENIDA --- */
        <div className="welcome-screen animate-fade-in">
          <span className="custom-host-text" style={{ marginBottom: '20px' }}>
            TIENES UNA INVITACIÓN
          </span>
          <h1 className="custom-celebrant-name" style={{ marginBottom: '40px', lineHeight: '1.2' }}>
            Rodrigo<br/>Martínez
          </h1>
          {/* Reutilizamos el estilo de tu botón para que todo combine */}
          <button 
            className="custom-map-button" 
            onClick={() => setIsOpen(true)}
          >
            ABRIR INVITACIÓN
          </button>
        </div>
      ) : (
        /* --- TU INVITACIÓN ORIGINAL --- */
        <div className="custom-invitation-card animate-slide-up">
          {/* Esquinas decorativas */}
          <div className="custom-decoration custom-decoration-tl" />
          <div className="custom-decoration custom-decoration-tr" />
          <div className="custom-decoration custom-decoration-bl" />
          <div className="custom-decoration custom-decoration-br" />

          <div className="custom-card-content">
            <header className="custom-header">
              <span className="custom-host-text">{invitationData.host}</span>
              <h1 className="custom-celebrant-name">{invitationData.celebrant}</h1>
              <h2 className="custom-event-subtitle">{invitationData.event}</h2>
            </header>

            <main className="custom-main-details">
              <div className="custom-details-grid">
                <div className="custom-detail-item custom-date-item">
                  <FiCalendar className="custom-detail-icon" />
                  <div className="custom-detail-text">
                    <span>{invitationData.date.split(' ')[0]}</span>
                    <span>{invitationData.date.split(' ')[1]}</span>
                    <span>{invitationData.date.split(' ')[2]}</span>
                  </div>
                </div>
                <div className="custom-detail-divider" />
                <div className="custom-detail-item custom-time-item">
                  <FiClock className="custom-detail-icon" />
                  <div className="custom-detail-text">
                    <span>{invitationData.time}</span>
                    <span className="custom-time-detail">{invitationData.timeDetail}</span>
                  </div>
                </div>
              </div>

              <div className="custom-location-details">
                <FiMapPin className="custom-detail-icon" />
                <div className="custom-detail-text">
                  <span className="custom-location-name">{invitationData.location}</span>
                  <span className="custom-location-address">{invitationData.address}</span>
                </div>
              </div>

              <a href={invitationData.mapLink} target="_blank" rel="noopener noreferrer" className="custom-map-button">
                VER EN EL MAPA
              </a>
            </main>

            <footer className="custom-footer">
              <h3 className="custom-confirmation-title">CONFIRMACIÓN DE ASISTENCIA</h3>
              <p className="custom-confirmation-deadline">{invitationData.deadline}</p>
              <div className="custom-contact-block">
                <span className="custom-contact-label">vía WhatsApp:</span>
                <a href={`https://wa.me/5215512345678`} className="custom-contact-number">
                  {invitationData.whatsapp}
                </a>
              </div>
            </footer>
          </div>
        </div>
      )}

    </div>
  );
}