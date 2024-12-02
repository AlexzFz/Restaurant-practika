import React from "react";
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='header-main'>
                <div className='header-main-1-3-div'>
                    <h2 className='header-main-1'>Добро пожаловать в</h2>
                    <div>
                        <h1 className='header-main-2'>Наш ресторан</h1>
                    </div>
                    <div>
                        <h2 className='header-main-3'>ДОМ ЛУЧШЕЙ ЕДЫ</h2>
                    </div>
                </div>
            </div>
            <div className='main-blocks'>
                <div className='main-block0'>
                    <img className='blocks-img' src="./img/card.png" alt="card"/>
                    <h3 className='block0-title'>Магическая <span>Атмосфера</span></h3>
                    <p className='block0-decoration'>В нашем заведении царит<br/>магическая атмосфера<br/>наполненная вкусными<br/>ароматами</p>
                </div>
                <div className='main-block1'>
                    <img className='blocks-img' src="./img/card.png" alt="card"/>
                    <h3 className='block1-title'>Лучшее качество <span>Еды</span></h3>
                    <p className='block1-decoration'>Качество нашей<br/>Еды - отменное!</p>
                </div>
                <div className='main-block2'>
                    <img className='blocks-img' src="./img/card.png" alt="card"/>
                    <h3 className='block2-title'>Недорогая <span>Еда</span></h3>
                    <p className='block2-decoration'>Стоимость нашей Еды<br/>зависит только от ее<br/>количества. Качество<br/>всегда на высоте!</p>
                </div>
            </div>
            <div className='main-history-holder'>
                <div>
                    <div className='history-text'>
                        <h2 className='history-title'>Наша <span>История</span></h2>
                        <p className='history-decoration'>Как и у любого другого самобытного места, у нас есть<br/>своя, особая история. Идея ресторана пришла<br/>основателям неожиданно. Во время прогулки по лесу<br/>создатель нашего ресторана застрял в сотнях<br/>километров от ближайшего населенного пункта. Вдали<br/>от цивилизации и связи им пришлось навремя<br/>обустровать себе нехитрый быт, добывать и готовить<br/>себе еду.</p>
                        <div className='main-cards'>
                            <div className='history-number'>
                                <p><span>93</span>Напитки</p>
                            </div>
                            <div className='history-number'>
                                <p><span>206</span>Еда</p>
                            </div>
                            <div className='history-number'>
                                <p><span>71</span>Закуски</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='history-imgs'>
                        <div className='block'></div>
                        <img className='history-img0' src="./img/430%201.png" alt=""/>
                        <img className='history-img1' src="./img/233%5D%201.png" alt=""/>
                        <img className='history-img2' src="./img/255%201.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className='main-order'>
                <div className='main-order-holder0'>
                    <h2 className='order-title'>Отпразднуйте в одном из<br/>самых лучших ресторанов.</h2>
                    <p className='order-decoration'>Только в этом месяце бизнес-ланч от 250 ₽</p>
                </div>
                <div className='main-order-holder1'>
                    <NavLink className="header-button" to="/reservation">ЗАКАЗ СТОЛИКА</NavLink>
                </div>
            </div>
            <h2 className='main-dishes-title'>Наши <span>Блюда</span></h2>
            <div className='main-dishes'>
                <div className='dishes-imgs'>
                    <img className='dishes-img' src="./img/pizza-4968645_1920%20(1)%201.png" alt=""/>
                    <div>
                        <div className='dishes-cart'>
                            <img className='dishes-subimg0' src="./img/hamburger-494706_1920%201.png" alt=""/>
                            <p className='dishes-title'>Гамбургер мини --------------------------- 220 ₽</p>
                        </div>
                        <div className='dishes-cart'>
                            <img className='dishes-subimg1' src="./img/hamburger-494706_1920%201.png" alt=""/>
                            <p className='dishes-title'>Гамбургер мини --------------------------- 220 ₽</p>
                        </div>
                        <div className='dishes-cart'>
                            <img className='dishes-subimg2' src="./img/hamburger-494706_1920%201.png" alt=""/>
                            <p className='dishes-title'>Гамбургер мини --------------------------- 220 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-menu'>
                <h2 className='main-menu-title'>Наше меню</h2>
                <div className='menu-humburgermaxi-holder'>
                    <div className='menu-humburgermaxi'>
                        <div className='menu-humburgermaxi-imgs'>
                            <img className='menu-humburgermaxi-img0' src="./img/menu-item.png" alt=""/>
                            <img className='menu-humburgermaxi-img1' src="./img/price.png" alt=""/>
                            <span>420</span>
                        </div>
                        <h3 className='menu-humburgermaxi-title'>Гамбургер макси</h3>
                        <p className='menu-humburgermaxi-decoration'>Максимально толстый<br/>слой мяса</p>
                        <NavLink className="menu-humburgermaxi-button" to="/">ЗАКАЗАТЬ</NavLink>
                    </div>
                    <div className='menu-humburgermaxi'>
                        <div className='menu-humburgermaxi-imgs'>
                            <img className='menu-humburgermaxi-img0' src="./img/menu-item.png" alt=""/>
                            <img className='menu-humburgermaxi-img1' src="./img/price.png" alt=""/>
                            <span>420</span>
                        </div>
                        <h3 className='menu-humburgermaxi-title'>Гамбургер макси</h3>
                        <p className='menu-humburgermaxi-decoration'>Максимально толстый<br/>слой мяса</p>
                        <NavLink className="menu-humburgermaxi-button" to="/">ЗАКАЗАТЬ</NavLink>
                    </div>
                    <div className='menu-humburgermaxi'>
                        <div className='menu-humburgermaxi-imgs'>
                            <img className='menu-humburgermaxi-img0' src="./img/menu-item.png" alt=""/>
                            <img className='menu-humburgermaxi-img1' src="./img/price.png" alt=""/>
                            <span>420</span>
                        </div>
                        <h3 className='menu-humburgermaxi-title'>Гамбургер макси</h3>
                        <p className='menu-humburgermaxi-decoration'>Максимально толстый<br/>слой мяса</p>
                        <NavLink className="menu-humburgermaxi-button" to="/">ЗАКАЗАТЬ</NavLink>
                    </div>
                </div>
            </div>
            <div className='main-comments'>
                <p>Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной<br/>Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем<br/>рекомендовать этот ресторан своим друзьям и родственникам также за рубежом,<br/>путешествующих в Санкт-Петербург!!!</p>
                <img className='main-comments-img' src="./img/face.png" alt=""/>
                <span>Посетитель</span>
                <h4>Николай</h4>
                <div className='main-comments-imgs'>
                    <img className='main-comments-img0' src="./img/Ellipse%2010.svg" alt=""/>
                    <img className='main-comments-img1' src="./img/Ellipse%2010.svg" alt=""/>
                    <img className='main-comments-img2' src="./img/Ellipse%208.svg" alt=""/>
                </div>
            </div>
            <div className="gallery">
                <h2 className='gallery-h2'>Галерея <span>Блюд</span></h2>
                <div className='red0'></div>
                <div className='red1'></div>
                <div className='gallery-img-holder'>
                    <div className='gallery-imgs'>
                        <img className='gallery-img none' src="./img/table-71380_1280%201.png" alt=""/>
                        <div className='gallery-img-block0'>
                            <img className='gallery-img' src="./img/coffee-3120750_1920%201.png" alt=""/>
                            <img className='gallery-img' src="./img/goulash-6054124_1920%201.png" alt=""/>
                        </div>
                    </div>
                    <div>
                        <div className='gallery-img-block1'>
                            <img className='gallery-img' src="./img/coffee-3120750_1920%201.png" alt=""/>
                            <img className='gallery-img' src="./img/goulash-6054124_1920%201.png" alt=""/>
                        </div>
                        <img className='gallery-img none' src="./img/table-71380_1280%201.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className='cook'>
                <h2>Наши <span>Повара</span></h2>
                <div className='cook-imgs'>
                    <img className='cook-img' src="./img/cook-196932_1920%201.png" alt=""/>
                    <img className='cook-img' src="./img/pizza-366111_1280%201.png" alt=""/>
                    <img src="./img/image%204.png" alt=""/>
                </div>
                <div className='cook-ellipse'>
                    <img className='cook-ellipse0' src="./img/Ellipse%209.svg" alt=""/>
                    <img src="./img/Ellipse%2010.svg" alt=""/>
                </div>
            </div>
            <div className='bg-end'></div>
        </>
    );
}
export { Home }