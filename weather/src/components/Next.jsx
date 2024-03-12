import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ user }) => {
    return (
        <div class="intro">
            <div class="container">
                <div className='flex-container'>
                    <div class="inner">
                        <div class="main_background">
                            <div class="main_border">
                                <h2 class="title">ИДЕТ НАБОР НА ОБУЧЕНИЕ В ШКОЛУ "ЛАВИТА" В НЕВСКОМ РАЙОНЕ ПЕТЕРБУРГА! УСПЕЙ ЗАПИСАТЬСЯ!</h2>
                            </div>
                        </div>
                    </div>
                    <a class="btn" href="#">Подробнее</a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
