import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css'
import NavBar from '../NavBar/NavBar';
import testWP from '../../assets/images/dlWP.png'

export function Layout(){
    return (
        <div className='layout-container' style={{
            backgroundImage: `url(${testWP})`,
            }}>
            <header className='header'><NavBar /></header>
            <main className='main-content'>
                <Outlet />
            </main>
        </div>
    );
};
