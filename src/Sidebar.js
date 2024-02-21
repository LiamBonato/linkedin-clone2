import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-2-1024x682.jpg' alt=''/>
            <Avatar className='sidebar_avatar' />
            <h2>Yantra</h2>
            <h4>email@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sider__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,532</p>
            </div>
                
            <div className='sider__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>4,212</p>
            </div>
        </div>

        <div className='sidebar_bottom'>
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar