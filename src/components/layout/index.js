import react, {useState, useEffect} from 'react'
import './index.scss'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBars} from '@fortawesome/free-solid-svg-icons'


const Header = ({navbar, setNavBar}) => {

  const [phone, setPhone] = useState(window.innerWidth < 1024)

  return(
    <div className="header-container">
      {!phone ? 
        <FontAwesomeIcon icon={faArrowLeft} className='menu-toggle-icon'/>
        :
        <FontAwesomeIcon icon={navbar ? faArrowLeft : faBars} className='menu-toggle-icon' onClick={() => {
          setNavBar(navbar => !navbar)
        }} />
      }
      <div className="path-box">
        <span>/</span> Calendar
      </div>
    </div>
  )
}

const Layout = () => {

  const [navbar, setNavbar] = useState(false)

  return(
    <div className="layout-container">
      <div className="lay-nav">
        <Navbar />
      </div>
      <div className="lay-out">
        <Header navbar={navbar} setNavBar={setNavbar}/>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;