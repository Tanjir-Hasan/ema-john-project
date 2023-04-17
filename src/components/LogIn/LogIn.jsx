import React, { useContext, useState } from 'react';
import './LogIn.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const LogIn = () => {

    const { signIn } = useContext(AuthContext);

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const location = useLocation();
    // console.log(location)

    const from = location.state?.from.pathname || '/';

    const handleLogIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="form-container">
                <h1 className='form-title'>Log in</h1>
                <form onSubmit={handleLogIn}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type={show ? "text" : "password"} name="password" required />
                        <p className='toggle-btn' onClick={() => setShow(!show)}>
                            {
                                show ?
                                    <span>HIDE</span>
                                    :
                                    <span>SHOW</span>
                            }
                        </p>
                    </div>
                    <input className='btn-submit' type="submit" value="Log in" />
                </form>
                <p className='bottom-text'> <small>New to Ema-John!</small><Link to="/signup" className='link-text'>Create New Account</Link> </p>
            </div>
        </div>
    );
};

export default LogIn;