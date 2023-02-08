import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/navbar';


export default function Loginpage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginSuccess, setLoginSuccess] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');

    const [errorMsg, setErrorMsg] = useState(false);

    const navigate = useNavigate();
    const usernameRef = useRef(null);
    console.log(usernameRef);

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    const loginUser = () => {
        axios({
            method: "POST",
            data: {
                username: username,
                password: password
            },
            url: `${import.meta.env.VITE_API}/login`
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
        <div>
            <Navbar />
            <div className="center padding-tb-2">
                <div className="container">
                    <h1>Login to Eco Up</h1>
                    {errorMsg && <h2>{errorMsg}</h2>}
                    <input id="username" name="username" type="text" placeholder="Username" ref={usernameRef} onChange={(e) => setUsername(e.target.value)} required />
                    <input id="password" name="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  required />
                    <button className='container-item-stretch'onClick={loginUser}>Log in</button>
                    <p className="message">Don't have an account? <Link to='/sign-up'>Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}