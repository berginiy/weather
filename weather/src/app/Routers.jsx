import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import RegInPage from '../pages/RegInPage'
import ErrorPage from '../pages/ErrorPage'
import LogInPage from '../pages/LogInPage'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/reg" element={<RegInPage />} />
                <Route path="/log" element={<LogInPage />} />
<<<<<<< HEAD
                <Route path="*" element={<ErrorPage />} />
=======
                <Route path="*" element={<ErrorPage/>} />
>>>>>>> 177440a2fab841b9071bed85a38584ec1fb88dc3
            </Routes>
        </BrowserRouter>
    );
};

<<<<<<< HEAD
export default Routers;
=======
export default Routers;
>>>>>>> 177440a2fab841b9071bed85a38584ec1fb88dc3
