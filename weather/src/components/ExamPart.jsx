import React from 'react';
import ret from '../img/ret.jpg';


const HomePage = ({ user }) => {
    return (
        <div class="Exam">
            <div class="container">
                <div class="post_head">
                    <h2>Экзамены</h2>
                </div>
                <div className='flex-exam'>
                    <div className='ecam-list'>
                        <div className='img-exam'>
                            <img src={ret} style={{ maxWidth: '100%', width: '300px', height: 'auto' }} />
                            <div className='exam-ul'>
                                <h3>Massa fringilla rhoncus purus gravida magnis. </h3>
                                <li>
                                    <ul>Sed viverra in nulla duis elit purus urna. </ul>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className='ecam-list'>
                        <div className='img-exam'>
                            <img src={ret} style={{ maxWidth: '100%', width: '300px', height: 'auto' }} />
                            <div className='exam-ul'>
                                <h3>Massa fringilla rhoncus purus gravida magnis. </h3>
                                <li>
                                    <ul>Sed viverra in nulla duis elit purus urna. </ul>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className='ecam-list'>
                        <div className='img-exam'>
                            <img src={ret} style={{ maxWidth: '100%', width: '300px', height: 'auto' }} />
                            <div className='exam-ul'>
                                <h3>Massa fringilla rhoncus purus gravida magnis. </h3>
                                <li>
                                    <ul>Sed viverra in nulla duis elit purus urna. </ul>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className='ecam-list'>
                        <div className='img-exam'>
                            <img src={ret} style={{ maxWidth: '100%', width: '300px', height: 'auto' }} />
                            <div className='exam-ul'>
                                <h3>Massa fringilla rhoncus purus gravida magnis. </h3>
                                <li>
                                    <ul>Sed viverra in nulla duis elit purus urna. </ul>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
