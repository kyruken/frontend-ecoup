import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Navbar from '../components/navbar';

export default function Signuppage() {
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const navigate = useNavigate();


    const registerUser = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
                email: registerEmail
            },
            url: `${import.meta.env.VITE_API}/register`
        }).then(navigate('/login'));
    }

    return (
        <div>
            <Navbar />
            <div className='center'>
                <div className="container padding-tb-3 padding-lr-2">
                    <h1>Sign-up</h1>
                    <input id="username" name="username" type="text" placeholder="Enter Username" onChange={(e) => setRegisterUsername(e.target.value)} required />
                    <input id="password" name="password" type="password" placeholder="Enter Password" onChange={(e) => setRegisterPassword(e.target.value)}  required />
                    <input id="email" name="email" type="email" placeholder="Enter E-mail Address" onChange={(e) => setRegisterEmail(e.target.value)}  required />
                    <button className='container-item-stretch' onClick={(e) => registerUser(e)}>Submit</button>
                </div>
            </div>
        </div>
    )
}