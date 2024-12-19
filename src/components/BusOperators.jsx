import React from 'react';
import '../styles/BusOperators.css';
import Pagination from './Pagination';
import { FaMapMarkerAlt } from 'react-icons/fa';

const BusOperatorsComparison = () => {
    const busOperators = [
        {
          name: 'Crosslines transport',
          origin: 'Lagos',
          destination: 'Abuja',
          time: '09:30am',
          price: 20000,
        },
        {
          name: 'Uniqueline Motors',
          origin: 'Lagos',
          destination: 'Abuja',
          time: '09:30am',
          price: 22000,
        },
        {
          name: 'Ifesinachi transport',
          origin: 'Lagos',
          destination: 'Abuja',
          time: '09:30am',
          price: 22000,
        },
        {
          name: 'Chisco transport',
          origin: 'Lagos',
          destination: 'Abuja',
          time: '09:30am',
          price: 23000,
        },
        {
          name: 'Riverslink Express',
          origin: 'Lagos',
          destination: 'Abuja',
          time: '09:30am',
          price: 24500,
        },
      ];
    
      return (
        <div className="bus-operators-section">
          <div className="bus-operators-comparison">
            <h2 className="title">Compare bus operators <br /> travelling from City to City</h2>
            <p className="subtitle">For bookings, easily compare schedules <br /> bus operators, and pricing</p>
            
            <div className="operators-container">
              {busOperators.map((operator, index) => (
                <div key={index} className="operator-card">
                  <div className="operator-name">{operator.name}</div>
                  <div className="details-row">
                    <div className="route">
                      {operator.origin} <FaMapMarkerAlt />- <FaMapMarkerAlt /> {operator.destination}
                    </div>
                    <div className="time">{operator.time}</div>
                    <div className="price">₦{operator.price}</div>
                  </div>
                </div>
              ))}
              <Pagination />
            </div>
          </div>
        </div>
      );
    };

export default BusOperatorsComparison;