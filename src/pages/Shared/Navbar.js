import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const logout = () => {
        signOut(auth);
        navigate('/login')

    };
    return (
        <div className='lg:px-16'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                            <li>
                                {
                                    user ? <p>Sign Out</p> : <Link to="login">Login</Link>
                                }
                            </li>
                            <li>
                                {
                                    user ? "" : <Link to="register">Register</Link>
                                }
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
                        <li>
                            {
                                user ? <button onClick={logout}>Sign Out</button> : <Link to="login">Login</Link>
                            }
                        </li>
                        <li>
                            {
                                user ? <Link to="register">{user.displayName}</Link> : <Link to="register">Register</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;