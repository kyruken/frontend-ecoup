import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Loginpage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginSuccess, setLoginSuccess] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');

    const [errorMsg, setErrorMsg] = useState(false);

    const navigate = useNavigate();


    const loginUser = () => {
        axios({
            method: "POST",
            data: {
                username: username,
                password: password
            },
            url: "http://localhost:3000/login"
        }).then(res => {
            if (res.data.message) {
                setErrorMsg(res.data.message);
            } else {
                setLoginSuccess(true);
                setUser(res.data.user);
                setToken(res.data.token);
                localStorage.setItem("loginSuccess", JSON.stringify(true));
                localStorage.setItem("user", JSON.stringify(res.data.user));
                localStorage.setItem("token", JSON.stringify(res.data.token));
                navigate('/');
            }
        });
    }

    return (
        <div className='padding-all-2'>
            <Link to='/'>Back</Link>
            <div className="container padding-tb-2">
                <h1>Login</h1>
                {errorMsg && <h2>{errorMsg}</h2>}
                <div>
                    <input id="username" name="username" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                    <input id="password" name="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  required />
                    <button onClick={loginUser}>Log in</button>
                </div>
                <p class="message">Don't have an account? <Link to='/sign-up'>Sign up</Link></p>
            </div>
        </div>
    )
}