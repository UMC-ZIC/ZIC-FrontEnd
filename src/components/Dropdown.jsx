import React, { useState } from 'react';
import './Dropdown.css';
import arrow from '../../public/dropdown-arrow.png';

function Dropdown({ options, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setselectedOption] = useState(label);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setselectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-btn">
        {selectedOption}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
          <img src={arrow} />
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index}>
              <button 
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}>{option}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;