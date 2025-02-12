import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from "moment";

const CalendarComponent = ({ date }) => {
  return (
      <Calendar
        calendarType="gregory"
        view="month"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        formatDay={(locale, date) => moment(date).format("DD")} 
      />
  );
};

export default CalendarComponent;



//일단 이런식으로 컴포넌트 구현을 하고
//여기서 date를 boolean으로 받아서 date가 false이면 일 표시는 없애도록