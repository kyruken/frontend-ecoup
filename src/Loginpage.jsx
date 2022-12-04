import React from 'react';
import { Link } from 'react-router-dom';
export default function Loginpage() {
    return (
        <div>
            <Link to='/'>Back</Link>
            <form method="POST" action={`http://localhost:3000/login`}>
                <input type='text' name='username' id='username' placeholder='username' />
                <input type='text' name='password' id='password' placeholder='password' />
            </form>
        </div>
    )
}