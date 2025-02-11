import React from 'react';
import { Link } from 'react-router-dom';
import './Main-Room.css';
import '../styles/fonts.css';

function RoomList({ rooms }) {
  return (
    <div className="room-list">
      {rooms.map((room) => {
        const [current, total] = room.available.split('/').map(Number);
        const isFull = current >= total;
        
        return (
          <Link to={`/roompage/${room.id}`} className="room-item" key={room.id}>
            <img src={room.image} alt={room.name} />
            <div className="room-info">
              <pre className={`room-available ${isFull ? 'full' : ''}`}>
                {isFull ? `만실 ${room.available}` : `이용가능 ${room.available}`}
              </pre>
              <h3>{room.name}</h3>
              <p className="room-time">
                <span className="hour">1시간</span>
                <span className="price">{room.price.toLocaleString()}</span>
                <span className="won">원</span>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default RoomList;