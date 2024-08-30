import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './nav/NavBar';
import './GeneralLayout.scss'
import SideMenu from './nav/sideMenu/SideMenu';



const GeneralLayout : React.FC = () => {
  return (
    <>
        <div className="app-body">
            <NavBar/>
            <div className="app-container">
                <aside className="sideMenu">
                    <SideMenu/>
                </aside>
                <div className="main-content">
                    <Outlet/>
                </div>
            </div>
        </div>
    </>
  )
}

export default GeneralLayout