import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-2-1024x682.jpg' alt=''/>
                <Avatar className='sidebar_avatar' />
                <h2>Yantra</h2>
                <h4>email@gmail.com</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,532</p>
                </div>
                    
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>4,212</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('programming.js')}
                {recentItem('softwareengineering.js')}
                {recentItem('design.js')}
                {recentItem('developer.js')}
            </div>
        </div>
    )
}

export default Sidebar