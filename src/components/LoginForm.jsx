import { React, useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.post('/login', { username, password })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                
            })
            .catch(error => {
                console.error('Login error:', error);
            });
    };

    return (
        <div>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
  
  export default LoginForm;