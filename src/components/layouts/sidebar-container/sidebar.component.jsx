import React from 'react';
import SidebarMenuComponent from '../../sidebar-menu/sidebar-menu.component';

const SidebarComponent = () => (
    <div className="sidebar-container">
        <div className="sidebar-item logo ">ClassSpace</div>
        <div className="sidebar-item menu ">
            <SidebarMenuComponent/>
        </div>
    </div>
)

export default SidebarComponent;