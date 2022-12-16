import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import StoreIcon from '@mui/icons-material/Store'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'

const Sidebar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext)
  let activeClassName

  switch (darkMode) {
    case true:
      activeClassName = 'dark'
      break
    case false:
      activeClassName = 'light'
      break

    default:
      return
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Admin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <NavLink to='/' style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <li className={isActive ? activeClassName : undefined}>
                <DashboardIcon className='icon' />
                <span>Dashboard</span>
              </li>
            )}
          </NavLink>
          <p className='title'>LISTS</p>
          <NavLink to='/users' style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <li className={isActive ? activeClassName : undefined}>
                <PersonOutlineIcon className='icon' />
                <span>Users</span>
              </li>
            )}
          </NavLink>
          <NavLink to='/products' style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <li className={isActive ? activeClassName : undefined}>
                <StoreIcon className='icon' />
                <span>Products</span>
              </li>
            )}
          </NavLink>
          <li>
            <CreditCardIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <InsertChartIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon' />

            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
