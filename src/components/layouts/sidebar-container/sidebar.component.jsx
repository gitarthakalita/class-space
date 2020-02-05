import React from 'react';
import SidebarMenuComponent from '../../sidebar-menu/sidebar-menu.component';
import { Link } from 'react-router-dom';

const SidebarComponent = () => (
    <div className="sidebar-container">
        <Link to='/'>
        <div className="sidebar-item logo ">ClassSpace</div>
        </Link>
        
        <div className="sidebar-item menu ">
            <SidebarMenuComponent/>
        </div>
    </div>
)

export default SidebarComponent;