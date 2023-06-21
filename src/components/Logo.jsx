import { Link } from 'react-router-dom'
import '../styles/blocks/logo.scss'

const Logo = () => {
    return (
        <div className="logo-wrapper">
            <Link to='/' className='logo'>
                <div className="logo-title">КВАДРАТНЫЙ МЕТР</div>
                <div className="logo-subtitle">купить квартиру в один клик</div>
            </Link>
        </div>
    )
}

export default Logo