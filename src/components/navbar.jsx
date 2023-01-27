import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DropDownItem from './dropdownItem';
import logout from '../assets/logout.png';
import account from '../assets/account.png';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('loginSuccess')));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handler);

        return() => {
            document.removeEventListener('mousedown', handler);
        }
    })

    const menuRef = useRef();
    return (
        <nav>
            <Link className="home" to='/'>EcoUp</Link>
            <div className="sideicons">
                <Link to='/aboutus'>About us</Link>
                {!isLoggedIn && <Link to='/login'>Login</Link>}
                {isLoggedIn && <button ref={menuRef} onClick={() => setIsOpen(prevState => !prevState)}>{user.username}</button>}
            </div>
            <div ref={menuRef} className={`dropdown-menu ${isOpen ? 'active' : 'inactive'}`}>
                <DropDownItem text={'Account'} image={logout} link={'/account'} />
                <div onClick={() => localStorage.clear()}>
                    <DropDownItem text={'Sign out'} image={account} link={'/login'} />
                </div>
            </div>
        </nav>
    )
}