import react, {useContext} from 'react'
import './index.scss'
import CalendarContext from './dataContext'

const Days = () => {

  const data = useContext(CalendarContext)
  
  return(
    <div className="days-box">
      <div className="days-name">SUN</div>
      <div className="days-name">MON</div>
      <div className="days-name">TUE</div>
      <div className="days-name">WED</div>
      <div className="days-name">THU</div>
      <div className="days-name">FRI</div>
      <div className="days-name">SAT</div>
    </div>
  )
}


export default Days