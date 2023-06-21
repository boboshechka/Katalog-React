import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className='top-panel'>
            <div className='top-panel__container'>
                <Link to='/'><div className="top-panel__title">интернет магазин недвижимости</div></Link>
                <div className="top-panel__favourites">
                    <Link className='top-panel__link' to='/favourites'>
                        <i className='fas fa-heart'></i>
                        Избранное</Link>
                    <Link className='top-panel__link' to='/favourites'>
                        <i className='fas fa-file-alt'></i>
                        Заявки
                    </Link>
                    <Link className='top-panel__link' to='/login'>
                        Регистрация
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header