import { useState } from 'react';
import api from '../services/api';

function Cadastro({ onCancelar }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [erro, setErro] = useState('');

    async function handleSubmit(e) {

        e.preventDefault();
        setErro('');

        try {

            await api.post('/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
            });

            alert('Cadastro realizado com sucesso!');

            onCancelar();

        } catch (error) {

            if (error.response?.status === 422) {

                const errors = error.response.data.errors;
                setErro(Object.values(errors)[0][0]);

            } else if (!error.response) {

                setErro('Não foi possível conectar ao servidor.');

            } else {

                setErro('Erro ao realizar o cadastro.');

            }

            console.error(error);

        }
    }

    return (
        <div>

            <h1>Cadastro</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

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

                <input
                    type="password"
                    placeholder="Confirmar senha"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                />

                <button type="submit">
                    Cadastrar
                </button>

                <button
                    type="button"
                    onClick={onCancelar}
                >
                    Voltar
                </button>

            </form>

            {erro && <p>{erro}</p>}

        </div>
    );
}

export default Cadastro;