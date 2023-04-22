import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);



    }

    return (
        <>
            <div className='form-container'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" id="" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </form>
                <p style={{textAlign: 'center'}}><small>Already have an account <Link to='/login' style={{color: '#FF9900'}}>Login</Link> </small></p>
            </div>
        </>
    );
};

export default SignUp;