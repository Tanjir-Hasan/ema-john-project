import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(result => { 
                const loggedUser = result.user;
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            {
                user && <span className='profile'> {user.email} <button className='btn-signout' onClick={handleLogOut}>Sign out</button></span>
            }
            <div className='menu'>
                <Link to="/">Order</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </nav>
    );
};

export default Header;