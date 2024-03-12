import React from 'react';
import Header from '../components/Header';
import Next from '../components/Next';
import ExamPart from '../components/ExamPart';
import Footer from '../components/Footer';
import Raid from '../components/Raid'

const MainPage = () => {
    return (
        <div className="main-page-container">
            <Header />
            <Next />
            <ExamPart />     
            <Raid />                   
            <Footer />
        </div>
    );
};

export default MainPage;