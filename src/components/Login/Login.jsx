import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    console.log(from);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, { replace: true });
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show? "text": "password"} name="password" required />
                    <button onClick={() => setShow(!show)}>
                        <small>
                            {
                                show ? <span>Hide Password</span>: <span>Show password</span>
                            }
                        </small>
                    </button>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p style={{ textAlign: 'center' }}><small>New to Ema-john? <Link to='/signup' style={{ color: '#FF9900' }}>Create New Account</Link> </small></p>
        </div>
    );
};

export default Login;