import React, { useEffect, useState } from 'react';
import '../styles/BookTicket.css';
import { FaUser, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const BookTicket = () => {
  const [cities, setCities] = useState([]);
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [travelDate, setTravelDate] = useState('2023-11-22');
  const [passengers, setPassengers] = useState(1);
  const [availableRides, setAvailableRides] = useState([]);
  const [error, setError] = useState(null);

  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("https://sandbox.myt40.com/api/v1/retailer/connections/routes", {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${PUBLIC_KEY}`, // Replace with your key
          },
        });
    

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        // Assuming the API returns an array of cities
        const uniqueCities = [...new Set(data.map(route => route.city))]; // Extract unique city names
        setCities(uniqueCities);
        setDepartureCity(uniqueCities[0]); // Default to the first city
        setDestinationCity(uniqueCities[1] || uniqueCities[0]); // Default to a different city or the same
      } catch (err) {
        console.error(err.message);
        setError('Failed to fetch cities. Please try again.');
      }
    };

    fetchCities();
  }, []);

  // Handle search
  const handleSearch = async () => {
    try {
      setError(null); // Reset error

      const response = await fetch("https://sandbox.myt40.com/api/v1/retailer/connections/routes", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${PUBLIC_KEY}`, // Replace with your key
        },
      });
      
      const queryParams = new URLSearchParams({
        from: departureCity,
        to: destinationCity,
        date: travelDate,
      });

      // const response = await fetch(`${url}?${queryParams}`, { headers });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setAvailableRides(data);
    } catch (err) {
      console.error(err.message);
      setError('Failed to fetch rides. Please try again.');
    }
  };

  
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
      {/* Passengers Row */}
      <div className="input-group full-width">
        <label htmlFor="passenger-count">Passengers</label>
        <div className="input-box">
          <FaUser className="icon" />
          <select
            id="passenger-count"
            className="passenger-select"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          >
            <option value="1">1 Passenger</option>
            <option value="2">2 Passengers</option>
            <option value="3">3 Passengers</option>
            <option value="4">4 Passengers</option>
            <option value="5">5+ Passengers</option>
          </select>
        </div>
      </div>

      {/* From and To Row */}
      <div className="form-row">
        <div className="input-group">
          <label htmlFor="from">From</label>
          <div className="input-box">
            <FaMapMarkerAlt className="icon" />
            <select
              id="from"
              value={departureCity}
              onChange={(e) => setDepartureCity(e.target.value)}
            >
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="to">To</label>
          <div className="input-box">
            <FaMapMarkerAlt className="icon" />
            <select
              id="to"
              value={destinationCity}
              onChange={(e) => setDestinationCity(e.target.value)}
            >
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Departure Date */}
      <div className="input-group full-width">
        <label htmlFor="departure-date">Departure Date</label>
        <div className="input-box">
          <FaCalendarAlt className="icon" />
          <input
            id="departure-date"
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
          />
        </div>
      </div>

      {/* Search Button */}
      <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  </div>
  );
};

export default BookTicket;
