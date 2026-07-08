import { useState } from 'react';
import api from '../services/api';

function Login({ onLogin, onCadastrar }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('');

    async function handleSubmit(e) {

        e.preventDefault();
        setErro('');

        try {

            const { data } = await api.post('/login', {
                email,
                password,
            });

            localStorage.setItem('token', data.token);

            onLogin();

        } catch (error) {

            if (error.response?.status === 401) {
                setErro('E-mail ou senha incorretos.');
            } else if (!error.response) {
                setErro('Não foi possível conectar ao servidor.');
            } else {
                setErro('Ocorreu um erro ao fazer login.');
            }

            console.error(error);

        }
    }

    return (
        <div>

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">
                    Entrar
                </button>

                <button
                    type="button"
                    onClick={onCadastrar}
                >
                    Criar conta
                </button>

            </form>

            {erro && <p>{erro}</p>}

        </div>
    );
}

export default Login;