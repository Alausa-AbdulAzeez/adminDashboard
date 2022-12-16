import {
  ChatBubbleOutlineOutlined,
  DarkModeOutlined,
  LanguageOutlined,
  LightModeOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  Person2Rounded,
  SearchOutlined,
} from '@mui/icons-material'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import './navbar.scss'

const Navbar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlined className='icon' />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlined className='icon' />
            English
          </div>
          <div className='item' onClick={() => dispatch({ type: 'TOGGLE' })}>
            {!darkMode ? (
              <DarkModeOutlined className='icon' />
            ) : (
              <LightModeOutlined className='icon' />
            )}
          </div>
          <div className='item'>
            <NotificationsNoneOutlined className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlined className='icon' />
            <div className='counter'>2</div>
          </div>

          <div className='item'>
            <ListOutlined className='icon' />
          </div>
          <div className='item'>
            <Person2Rounded className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
