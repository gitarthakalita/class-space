import React from 'react';

import { Link } from 'react-router-dom';

const SidebarMenuComponent = () => (
    <div className="sidebar-menu-container">

        <Link to='/'>
        <div className="sidebar-menu-item ">Dashboard Home</div>
        </Link>
        
        <Link to='/course-curriculum'>
            <div className="sidebar-menu-item ">Course Curriculum</div>
        </Link>
        <div className="sidebar-menu-item ">Time-Table</div>
        <div className="sidebar-menu-item ">Resource Hub</div>
        <div className="sidebar-menu-item ">Resource Creator </div>
        <div className="sidebar-menu-item ">Student Records  </div>
        <div className="sidebar-menu-item "> Task Creator </div>
        <div className="sidebar-menu-item "> Test Creator </div>
        <div className="sidebar-menu-item ">Performence Analytics</div>
        <div className="sidebar-menu-item ">Diagnostic Tests</div>
        <div className="sidebar-menu-item ">Mock Tests</div>
        <div className="sidebar-menu-item ">Tasks and Events</div>
    </div>
)

export default SidebarMenuComponent;