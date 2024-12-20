import React, { useEffect, useState } from 'react';
import '../styles/BookTicket.css';
import { FaUser, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const BookTicket = () => {
  const [cities, setCities] = useState([]);
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [travelDate, setTravelDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
  const [passengers, setPassengers] = useState(1);
  const [availableRides, setAvailableRides] = useState([]);
  const [error, setError] = useState(null);

  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY || 'default-key';

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("https://sandbox.myt40.com/api/v1/retailer/connections/routes", {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${PUBLIC_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        const uniqueCities = [...new Set(data.map(route => route.city))];
        setCities(uniqueCities);
        if (uniqueCities.length > 1) {
          setDepartureCity(uniqueCities[0]);
          setDestinationCity(uniqueCities[1]);
        } else {
          setError('Not enough cities available for travel.');
        }
      } catch (err) {
        console.error(err.message);
        setError('Failed to fetch cities. Please try again.');
      }
    };

    fetchCities();
  }, [PUBLIC_KEY]);

  const handleSearch = async () => {
    try {
      setError(null); // Reset error

      const response = await fetch("https://sandbox.myt40.com/api/v1/retailer/connections/routes", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${PUBLIC_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      // Assuming the data includes available rides
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
          {error && <div className="error-message">{error}</div>}

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

          <button className="search-button" onClick={handleSearch}>
            Search
          </button>

          {availableRides.length > 0 && (
            <div className="rides-list">
              <h3>Available Rides</h3>
              <ul>
                {availableRides.map((ride, index) => (
                  <li key={index}>
                    {ride.details || `Ride ${index + 1}`} {/* Replace "details" with the actual field */}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
