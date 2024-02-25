import React from 'react';
import { Link } from 'react-router-dom'; 

const HomePage = ({ user }) => {
    return (
        <div className="main-page-container">
            <header className="header">
                <div className="header-title">
                    <h1>Arkane Studios</h1>
                </div>
                <div className='header-inner'>
                    <div>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <nav>
                        {!user ? (
                            <>
                                <Link className='link' to='/login'>Войти</Link>
                                <Link className='link' to='/register'>Зарегистрироваться</Link>
                            </>
                        ) : (
                            <>
                                <Link className='link' to='/logout'>Выйти</Link>
                                <Link className='link' to='/home'>Главная</Link>
                            </>
                        )}
                    </nav>
                </div>
            </header>
            <div className="content">
                <h2>Welcome to Arkane Studios</h2>
                <p>We create immersive and innovative gaming experiences.</p>
            </div>
        </div>
    );
}

export default HomePage;
