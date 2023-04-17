import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password !== confirm) {
            setError('Password did not match')
        }
        else if (password.length < 6) {
            setError('Password must be 6 character or longer')
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div>
            <div className="form-container">
                <h1 className='form-title'>Sign up</h1>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" required />
                    </div>
                    <p className='error'> <small>{error}</small> </p>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                    <p className='bottom-text'> <small>Already have an account!</small><Link to="/login" className='link-text'>Log in</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;