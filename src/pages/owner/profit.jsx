import React, { useState } from "react";
import "./profit.css";
import MainHeader from "../../components/main-header.jsx";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // 선택한 날짜 상태

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 현재 달의 첫 번째 날짜와 마지막 날짜 계산
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // 첫 날의 요일과 마지막 날짜 계산
  const firstDayOfWeek = firstDay.getDay(); // 일요일 = 0
  const daysInMonth = lastDay.getDate();

  // 이전 달로 이동
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // 다음 달로 이동
  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // 날짜 생성
  const days = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <>
    <MainHeader/>
    <div className="calendar">
      {/* 상단 네비게이션 */}
      <div className="calendar-header">
        <button onClick={goToPreviousMonth} className="">
          <img src="back-button.png"/>
        </button>
        <h2>{year}. {String(month + 1).padStart(2, "0")}</h2>
        <button onClick={goToNextMonth}>
          <img src="back-button.png"/>
        </button>
      </div>
    </div>
    </>
  );};

export default Calendar;