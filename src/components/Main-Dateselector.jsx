import React, { useState } from "react";
import "./Main-DateSelector.css";
import arrowleft from "../../public/arrowbutton-L.png";
import arrowright from "../../public/arrowbutton-R.png";
import '../styles/fonts.css';

const DateSelector = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // 월 이름 및 날짜 생성
  const getMonthName = (date) =>
    date.toLocaleDateString("en-US", { month: "short" });
  const generateDates = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));
  };

  // 월 변경
  const changeMonth = (direction) => {
    const newMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + direction,
      1
    );
    setCurrentMonth(newMonth);
  };

  // 날짜 선택
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const dates = generateDates(currentMonth);

  return (
    <div className="date-selector">
      {/* 월 변경 */}
      <div className="month-navigation">
        <button className="btn-left" onClick={() => changeMonth(-1)}>
          <img src={arrowleft} />
        </button>
        <span>{getMonthName(currentMonth)}.</span>
        <button className="btn-right" onClick={() => changeMonth(1)}>
          <img src={arrowright} />
        </button>
      </div>

      {/* 날짜 스크롤 */}
      <div className="date-scroll">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`date-item ${
              selectedDate?.toDateString() === date.toDateString() ? "selected" : ""
            }`}
            onClick={() => handleDateClick(date)}
          >
            <div className="date">{date.toLocaleDateString("ko-KR", { weekday: "short" })}</div>
            <div className="date-number">{String(date.getDate()).padStart(2, "0")}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateSelector;