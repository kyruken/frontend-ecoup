import { Link } from 'react-router-dom';
import plant from '../assets/ecoupplant.png';
export default function Header() {
    return (
        <div className='width100'>
            <div className='header-container padding-tb-2 padding-lr-2 margin-top-2'>
                <div>
                    <h3>Welcome to Eco Up</h3>
                    <h2>Let's get</h2>
                    <h1>Sustainable</h1>
                    <p>Engage in ecological activities to support the sustainability of our planet.</p>
                    <Link to='/login'><button className="margin-top-1">Start now</button></Link>
                </div>
                <div>
                    <img src={plant} className="header-img"></img>
                </div>
            </div>
        </div>
    )
}