import React from 'react';
import { Link } from 'react-router-dom';

const ProfileMenu = () => (
    <div className="profile-menu-container ">

        <Link to='/profile'>
        <div className="profile-menu-item">Profile</div>
        </Link>
        <Link to='/account'>
        <div className="profile-menu-item">Account</div>
        </Link>
        <Link to='/settings'>
        <div className="profile-menu-item">Settings</div>
        </Link>
        <Link to='/about'>
        <div className="profile-menu-item strike">About</div>
        </Link>
        <Link to='/support'>
        <div className="profile-menu-item strike">Support</div>
        </Link>
         
    </div>
)


export default ProfileMenu;