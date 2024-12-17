import React from 'react';
import '../styles/BookTicket.css';
import { FaUser, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const BookTicket = () => {
  return (
    <div className="ticket-container">
    <div className="ticket-info">
      <h1>
        Buy <span className="highlight">cheap</span> <br /> bus tickets online <br /> in Nigeria
      </h1>
      <p>Book bus tickets for all interstate <br /> travels in Nigeria</p>
    </div>
    <div className="form-container">
      <div className="form-header">
        <FaUser /> Buy tickets
      </div>
      <div className="form-body">
        <div className="form-row">
          <div className="input-group">
            <label>From</label>
            <div className="input-box">
              <FaMapMarkerAlt /> Port Harcourt
            </div>
          </div>
          <div className="input-group">
            <label>To</label>
            <div className="input-box">
              <FaMapMarkerAlt /> Lagos
            </div>
          </div>
        </div>
        <div className="input-group full-width">
          <label>Departure date</label>
          <div className="input-box">
            <FaCalendarAlt /> 22/11/2023
          </div>
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  </div>
  );
};

export default BookTicket;
