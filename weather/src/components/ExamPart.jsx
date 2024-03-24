import React from 'react';
import ret from '../img/ret.jpg';

const HomePage = ({ user }) => {
    return (
        <div className="exam-container">
            <div className="container">
                <div className="post_head">
                    <h2>Экзамены</h2>
                </div>
                <div className='flex-exam'>
                    {/* Exam 1 */}
                    <div className='exam-list'>
                        <div className='img-exam'>
                            <img src={ret} alt="Exam 1" />
                            <div className='exam-ul'>
                                <h3>Massa fringilla rhoncus purus gravida magnis. </h3>
                                <ul>
                                    <li>Sed viverra in nulla duis elit purus urna. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Exam 2 */}
                    <div className='exam-list'>
                        <div className='img-exam'>
                            <img src={ret} alt="Exam 2" />
                            <div className='exam-ul'>
                                <h3>Massa fringilla rhoncus purus gravida magnis. </h3>
                                <ul>
                                    <li>Sed viverra in nulla duis elit purus urna. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Exam 3 */}
                    <div className='exam-list'>
                        <div className='img-exam'>
                            <img src={ret} alt="Exam 3" />
                            <div className='exam-ul'>
                                <h3>Massa fringilla rhoncus purus gravida magnis. </h3>
                                <ul>
                                    <li>Sed viverra in nulla duis elit purus urna. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Exam 4 */}
                    <div className='exam-list'>
                        <div className='img-exam'>
                            <img src={ret} alt="Exam 4" />
                            <div className='exam-ul'>
                                <h3>Massa fringilla rhoncus purus gravida magnis. </h3>
                                <ul>
                                    <li>Sed viverra in nulla duis elit purus urna. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
