import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='px-16'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="#" className="btn btn-ghost text-xl uppercase">Aesthetic Dental Care</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="appointment">Appointment</NavLink>
                        </li>
                        <li>
                            <NavLink to="reviews">Reviews</NavLink>
                        </li>
                        <li>
                            <NavLink to="contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="login" className="btn mx-5">Login</Link>
                    <Link to="register" className="btn">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;