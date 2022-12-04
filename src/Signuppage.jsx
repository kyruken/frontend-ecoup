import { Link } from 'react-router-dom';

export default function Signuppage() {
    return (
        <div>
            <Link to='/'>Back</Link>
            <h1>Sign-up</h1>
            <form method="post" action="#">
                <fieldset>
                    <input id="username" name="username" type="text" placeholder="Enter Username" required />
                    <input id="password" name="password" type="password" placeholder="Enter Password" required />
                    <input id="password" name="password" type="password" placeholder="Re-enter Password" required />
                    <input id="email" name="email" type="email" placeholder="Enter E-mail Address" required />
                </fieldset>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}