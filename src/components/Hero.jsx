import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import dummyData from '../data/dummyData';
import './Hero.css';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet's CSS is imported
import whiteArrow from '../images/white-arrow.png'; // Import the image

const Hero = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDatePlaceholder, setStartDatePlaceholder] = useState('Start Date');
  const [endDatePlaceholder, setEndDatePlaceholder] = useState('End Date');

  return (
    <div className="hero">
      <div className="filters">
        <input type="text" placeholder="Location" />
        <select>
          <option value="any">Type of Camp</option>
          <option value="health">Health Check-up</option>
          <option value="education">Educational Support</option>
          <option value="environment">Environmental Awareness</option>
          <option value="skill">Skill Development</option>
        </select>
        <select>
          <option value="any">Duration</option>
          <option value="1day">1 Day</option>
          <option value="2days">2 Days</option>
          <option value="1week">1 Week</option>
          <option value="1month">1 Month</option>
        </select>
        <input
          type="text"
          value={startDate}
          onFocus={() => setStartDatePlaceholder('')}
          onBlur={() => setStartDatePlaceholder(startDate ? '' : 'Start Date')}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder={startDatePlaceholder}
          onClick={(e) => e.target.type = 'date'}
        />
        <input
          type="text"
          value={endDate}
          onFocus={() => setEndDatePlaceholder('')}
          onBlur={() => setEndDatePlaceholder(endDate ? '' : 'End Date')}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder={endDatePlaceholder}
          onClick={(e) => e.target.type = 'date'}
        />
        <select>
          <option value="any">Organizer</option>
          <option value="ngo1">NGO 1</option>
          <option value="ngo2">NGO 2</option>
          <option value="ngo3">NGO 3</option>
        </select>
        <button className="search-button">
          <img src={whiteArrow} alt="Search" className="search-icon" />
          Search
        </button>
      </div>
      <div className="content">
        <div className="cards">
          {dummyData.map((item) => (
            <a href={`/details/${item.id}`} className="card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.address}</p>
              {/* <p>{item.price}</p>
              <p>{item.bedrooms} bedroom, {item.bathrooms} bathroom</p> */}
            </a>
          ))}
        </div>
        <div className="map">
          <MapContainer center={[21.1466, 79.0888]} zoom={5} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {dummyData.map((item, index) => (
              <Marker key={index} position={item.coordinates}>
                <Popup>
                  {item.title}<br />{item.address}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Hero;