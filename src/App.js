import { useState } from 'react';
import './App.css';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Recados from './pages/Recados';

function App() {
    const [logado, setLogado] = useState(
        !!localStorage.getItem('token')
    );

    const [mostrarCadastro, setMostrarCadastro] = useState(false);

    return (
        <div className="App">

            {logado ? (
                <Recados />
            ) : mostrarCadastro ? (
                <Cadastro
                    onCancelar={() => setMostrarCadastro(false)}
                />
            ) : (
                <Login
                    onLogin={() => setLogado(true)}
                    onCadastrar={() => setMostrarCadastro(true)}
                />
            )}

        </div>
    );
}

export default App;