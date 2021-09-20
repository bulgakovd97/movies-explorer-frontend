import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Logo() {
    return (
        <Link className='logo-link' to='/'>
            <img className='logo' alt='Logo' src={logo} />
        </Link>
    )
}

export default Logo;