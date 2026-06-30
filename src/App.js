import { useState } from 'react';
import './App.css';

import Login from './pages/Login';
import Recados from './pages/Recados';

function App() {

    const [logado, setLogado] = useState(
        !!localStorage.getItem('token')
    );

    return (
        <div className="App">

            {logado ? (
                <Recados />
            ) : (
                <Login onLogin={() => setLogado(true)} />
            )}

        </div>
    );
}

export default App;