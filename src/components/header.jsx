import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div>
            <nav>
                <Link className="home" to='/'>EcoUp</Link>
                <div className="sideicons">
                    <Link to='/aboutus'>About us</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </nav>
        </div>
    )
}