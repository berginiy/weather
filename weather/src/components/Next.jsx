import React from 'react';

const HomePage = ({ user }) => {
    return (
        <div className="intro">
            <div className="container">
                <div className='flex-container'>
                    <div className="inner">
                        <div className="main_background">
                            <div className="main_border">
                                <h2 className="title">ИДЕТ НАБОР НА ОБУЧЕНИЕ В ШКОЛУ "ЛАВИТА" В НЕВСКОМ РАЙОНЕ ПЕТЕРБУРГА! УСПЕЙ ЗАПИСАТЬСЯ!</h2>
                            </div>
                        </div>
                    </div>
                    <a className="btn" href="#">Подробнее</a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
