import React from 'react';
import { Link } from 'react-router-dom';
export default function Loginpage() {
    return (
        <div className='padding-all-2'>
            <Link to='/'>Back</Link>
            <h1>WIP</h1>
            <div className="container padding-tb-2">
                <h1>Login</h1>
                <form method="post" action="">
                    <fieldset>
                        <input id="username" name="username" type="text" placeholder="Username" required />
                        <input id="password" name="password" type="password" placeholder="Password" required />
                    </fieldset>
                    <input type="submit" value="Submit" />
                </form>
                <p class="message">Don't have an account? <Link to='/sign-up'>Sign up</Link></p>
            </div>
        </div>
    )
}