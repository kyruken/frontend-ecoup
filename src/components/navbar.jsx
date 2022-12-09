import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav>
            <Link className="home" to='/'>EcoUp</Link>
            <div className="sideicons">
                <Link to='/aboutus'>About us</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    )
}