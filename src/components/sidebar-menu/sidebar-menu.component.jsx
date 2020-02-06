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
        <Link to='/time-table'>
        <div className="sidebar-menu-item ">Time-table</div>
        </Link>
        <Link to='/resource-hub'>
        <div className="sidebar-menu-item ">Resource Hub</div>
        </Link>
        <Link to='/resource-creator'>
        <div className="sidebar-menu-item ">Resource Creator </div>
        </Link>
        <div className="sidebar-menu-item strike">Student Records  </div>


        <Link to='/task-creator'>
        <div className="sidebar-menu-item "> Task Creator </div>
        </Link>
        <div className="sidebar-menu-item strike"> Test Creator </div>
        <div className="sidebar-menu-item strike ">Performence Analytics</div>
        <div className="sidebar-menu-item strike">Diagnostic Tests</div>
        <div className="sidebar-menu-item strike">Mock Tests</div>
        <Link to='tasks-and-events'>
        <div className="sidebar-menu-item ">Tasks and Events</div>
        </Link>
    </div>
)

export default SidebarMenuComponent;