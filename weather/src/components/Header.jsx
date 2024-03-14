import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ user }) => {
    return (
        <header class="header">
            <div class="container">

                <div className="header-inner">
                    <Link to='/'>Main</Link>
                    <Link to='/log'>LogIn</Link>
                    <Link to='/reg'>RegIn</Link>
                </div>
            </div>
        </header>
    );
}

export default HomePage;