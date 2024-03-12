import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ user }) => {
    return (
        <header class="header">
            <div class="container">

                <div class="header_inner">
                    <nav class="nav">
                        <a class="link" href="../src3/index2.html">O нас</a>
                        <a class="link" href="../src3/index2.html">Специалисты</a>
                        <a class="link" href="../src3/index2.html">Расписание</a>
                        <a class="link" href="../src3/index2.html">Мероприятия</a>
                        <a class="link" href="../src3/index2.html">Экзамены</a>
                        <a class="link" href="../src3/index2.html">Обучение в испании</a>
                        <a class="link" href="../src3/index2.html">Новости</a>
                        <a class="btn_1" href="../src3/index2.html">запись на курсы</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default HomePage;
