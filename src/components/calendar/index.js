import react, {useState, createContext, useContext} from 'react';
import './index.scss'
import CalendarContext from './dataContext';
import Selection from './selection'
import Days from './days'
import Dates from './dates'

const Calendar = () => {

  const [year, setYear] = useState(2022)
  const [month, setMonth] = useState(5)
  const [week, setWeek] = useState(3)
  const [day, setDay] = useState(20)
  const [date, setDate] = useState('20/5/2022')  

  return(
    <div className="calendar-container">
      <CalendarContext.Provider value={{
        year: year,
        setYear: setYear,
        month: month,
        setMonth: setMonth,
        week: week,
        setWeek: setWeek,
        day: day,
        setDay: setDay,
        date: date,
        setDate: setDate,
      }}>
        <div className="calendar-box">
          <Selection />
          <Days />
          <Dates />
        </div>
      </CalendarContext.Provider>
    </div>
  )
}

export default Calendar;