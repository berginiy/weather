import React from 'react';
import note from '../img/note.jpg';

const HomePage = ({ user }) => {
    return (
        <section className='bird'>
            <div className='section_left'>
                <div className="section_text">
                    <h2>Мероприятия</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit similique sint animi quo laboriosam maxime quaerat, delectus rem consectetur soluta explicabo, deserunt consequuntur? Numquam cupiditate neque debitis. Dolores, ipsam dolor.</p>
                </div>
            </div>
            <div className='section_right'>
                <img src={note} style={{ maxWidth: '100%', width: '1000px', height: 'auto' }} />
            </div>
        </section>
    );
}

export default HomePage;