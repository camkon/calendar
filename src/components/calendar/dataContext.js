import {createContext} from 'react'

const CalendarContext = createContext({
  year: null,
  setYear: null,
  month: null,
  setMonth: null,
  week: null,
  setWeek: null,
  day: null,
  setDay: null,
  date: null,
  setDate: null,
})

export default CalendarContext;