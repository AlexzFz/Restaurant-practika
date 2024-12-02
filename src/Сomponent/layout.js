import { NavLink, Outlet, Link } from 'react-router-dom';
import '../reset.css';

function Layout() {
    return (
        <>
            <header className='container'>
                <div className="header-menu">
                    <div className="logo">
                        <NavLink to="/"><img src="./img/LOGO.png" alt="logo"/></NavLink>
                    </div>
                    <div className='header-submenu'>
                        <div className="nav">
                            <NavLink className="nav-item" to="/">ГЛАВНАЯ</NavLink>
                            <NavLink className="nav-item" to="/menu">МЕНЮ</NavLink>
                            <NavLink className="nav-item" to="/aboutUs">О НАС</NavLink>
                            <NavLink className="nav-item" to="/reservation">БРОНЬ</NavLink>
                        </div>
                        <div className="cart">
                            <NavLink to="/reservation">
                                <img className="img-cart" src="./img/cart.png" alt="cart"/>
                            </NavLink>
                        </div>
                        <div>
                            <div className="phone-holder">
                                <img src="./img/phone.png" alt="phone"/>
                                <NavLink className="phone-number" to="/reservation">+999-888-76-54</NavLink>
                            </div>
                            <p className="phone-text">Свяжитесь с нами для <br />бронирования</p>
                        </div>
                        <NavLink className="header-button" to="/reservation">ЗАКАЗ СТОЛИКА</NavLink>
                    </div>
                    <div className='header-burger-menu'>
                        <button id='burder'>
                            <img src="./img/Burger-menu.svg" alt="Burger menu"/>
                        </button>
                        <div id='menu' className='burger-slide disp'>
                            <NavLink className="nav-item burger-slide-block" to="/">ГЛАВНАЯ</NavLink>
                            <NavLink className="nav-item burger-slide-block" to="/menu">МЕНЮ</NavLink>
                            <NavLink className="nav-item burger-slide-block" to="/contactUs">О НАС</NavLink>
                            <NavLink className="nav-item burger-slide-block" to="/reservation">БРОНЬ</NavLink>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div>
                    <p>Вы сможете обратититься к нам по номеру</p>
                    <NavLink className="phone-number" to="/reservation">+999-888-76-54</NavLink>
                    <div className="logo">
                        <NavLink to="/"><img src="./img/LOGO.png" alt="logo"/></NavLink>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2024 Restaurant</p>
                    <p>Все права защищены</p>
                    <p>Полезные ссылки</p>
                    <div className='footer-link'>
                        <NavLink className="nav-item" to="/privacyPolicy">Политика Конфиденциальности</NavLink>
                        <NavLink className="nav-item" to="/reservation">Бронирование</NavLink>
                    </div>
                    
                </div>
        </footer>
        </>
    );
}
export { Layout }