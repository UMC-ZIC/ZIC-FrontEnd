import React from 'react';
import Dropdown from './Dropdown';
import './Main-Filter.css';
import '../styles/fonts.css';

function Filters({ 
  locationOptions, 
  timeOptions, 
  onLocationChange,
  onTimeChange,
  priceOptions }) {
  return (
    <div className="filters">
      <Dropdown label="지역" options={locationOptions} onOptionSelect={onLocationChange}/>
      <Dropdown className="time" label="시간" options={timeOptions} onOptionSelect={onTimeChange}/>
      <Dropdown className="price" label="저가순" options={priceOptions} />
    </div>
  );
}

export default Filters;