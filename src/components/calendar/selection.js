import react, {useContext} from 'react'
import './index.scss'
import CalendarContext from './dataContext'

const Selection = () => {

  const data = useContext(CalendarContext)

  return(
    <div className="selection-box">
      
    </div>
  )
}


export default Selection;