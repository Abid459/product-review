import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import Reviews from '../Reviews/Reviews';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <NavLink to={'/'} className={({isActive})=>isActive?'active-nav-link':'nav-item'}>HOME</NavLink>
                {/* <NavLink to={'/home'} className={({isActive})=>isActive?'active-nav-link':'nav-item'}>HOME</NavLink> */}
                <NavLink to={'/about'} className={({isActive})=>isActive?'active-nav-link':'nav-item'}>ABOUT</NavLink>
                <NavLink to={'/reviews'} className={({isActive})=>isActive?'active-nav-link':'nav-item'}>REVIEWS</NavLink>
                <NavLink to={'/blogs'} className={({isActive})=>isActive?'active-nav-link':'nav-item'}>BLOGS</NavLink>
                <NavLink to={'/dashboard'} className={({isActive})=>isActive?'active-nav-link':'nav-item'}>DASHBOARD</NavLink>
                {/* <NavLink to={'*'} className={({isActive})=>isActive?'active-nav-link':'nav-item'}>404</NavLink> */}
                
            </nav>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='/reviews' element={<Reviews></Reviews>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
};

export default Header;