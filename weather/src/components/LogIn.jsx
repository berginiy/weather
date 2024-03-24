import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function setInputUsername(event) {
        setUsername(event.target.value);
    }

    function setInputPassword(event) {
        setPassword(event.target.value);
    }

    async function sendForm(event) {
        event.preventDefault();

        try {
            const response = await axios.post('http://217.151.230.35:888/api/v1/regauth/login/', {
                username: username,
                password: password
            });
            console.log(response.data);
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            localStorage.setItem('user_id', response.data.user_id);

            navigate('/');
        } catch (error) {
            if (error.response) {
                console.error('Authentication failed. Server responded with:', error.response.data);
            } else if (error.request) {
                console.error('No response received from the server. Is the server running?');
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
    }

    function back() {
        navigate('/');
    }

    return (
        <div className="back">
            <div className="login">
                <form onSubmit={sendForm} method="post">
                    <h2>Login</h2>
                    <label htmlFor="name">Name: </label>
                    <input onChange={setInputUsername} type="text" name="username" placeholder="enter your username" />
                    <label htmlFor="password">Password: </label>
                    <input onChange={setInputPassword} type="password" name="password" placeholder="enter your password" />
                    <input className="submit" type="submit" value="submit" />
                    <button onClick={back} className='op_next'>Back</button>
                </form>
            </div>
            <div className='wrapper'>
                <a class="link" >O нас</a>
                <a class="link" >Специалисты</a>
                <a class="link" >Расписание</a>
                <a class="link" >Мероприятия</a>
                <a class="link" >Экзамены</a>
                <a class="link" >Обучение в испании</a>
                <a class="link">Новости</a>
            </div>
        </div>
    );
}
