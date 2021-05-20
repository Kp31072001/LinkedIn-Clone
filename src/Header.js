import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOpton from './HeaderOpton';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();

    }

    return (
        <div className='header'>
          

            <div className="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

                <div className="header_search">
                    <SearchIcon/>
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOpton Icon={HomeIcon} title="Home"/>
                <HeaderOpton Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOpton Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOpton Icon={ChatIcon} title="Messaging" />
                <HeaderOpton Icon={NotificationsIcon} title="Notifications" />
                <HeaderOpton
                 avatar={true}
                title='me'
                onClick={logoutOfApp}
                
                />



            </div>
        </div>
    )
}

export default Header
