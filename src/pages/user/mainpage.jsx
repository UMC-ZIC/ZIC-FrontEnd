import React from 'react';
import Header from '../../components/main-header';
import Filters from '../../components/Main-Filter';
import DateSelector from '../../components/Main-Dateselector';
import RoomList from '../../components/Main-Room';
import Banner from '../../components/Main-Banner';
import Footer from '../../components/Main-Footer';
import room1 from '../../../public/first_room.png';
import room2 from '../../../public/second_room.png'
import room3 from '../../../public/third_room.png'
import room4 from '../../../public/fourth_room.png'
import '../../App.css';

function MainPage() {
  const rooms = [
    { id: 1, name: '가위 피아노', price: 10000, available: '2 / 5', image: room1 },
    { id: 2, name: '나비 연습실', price: 13000, available: '6 / 7', image: room2 },
    { id: 3, name: '라라 연습실', price: 15000, available: '1 / 1', image: room3 },
    { id: 4, name: '마음 피아노', price: 13000, available: '4 / 5', image: room4 },
  ];

  const locationOptions = ['서울', '부산', '대전', '울산'];
  const timeOptions = ['1시간', '2시간', '3시간'];
  const priceOptions = ['저가순', '고가순'];

  return (
    <div className="app">
      <Header />
      <main className="content">
        <DateSelector />
        <Filters 
        locationOptions={locationOptions} 
        timeOptions={timeOptions} 
        priceOptions={priceOptions} 
        />
        <Banner />
        <RoomList rooms={rooms} />
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;