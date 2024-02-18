import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';

const WeatherPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/contacts" element={<ContactPage/>} />
                <Route path="/weather" element={<WeatherPage/>} />
                <Route path="*" element={<NonePage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default WeatherPage;
