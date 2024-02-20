import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>

        <div className='header__left'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png' alt=''/>

            <div className='header__search'>
                <SearchIcon />
                <input type='text'/>
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        </div>

    </div>
  )
}

export default Header