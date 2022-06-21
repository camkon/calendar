import react, {useState, useEffect, useContext} from 'react'
import './index.scss'

import CalendarContext from './dataContext'

const Dates = () => {

  const data = useContext(CalendarContext)

  
  const [datesArray, setDatesArray] = useState([])
  return(
    <div className="dates-box">
      {
        datesArray.map((i, index) => {
          return(
            <div className="dates-num">{i}</div>
          )
        })
      }
    </div>
  )
}


export default Dates;