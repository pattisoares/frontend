import { useState } from 'react';

function RecadoForm({ onCriar }) {
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [salvando, setSalvando] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        setSalvando(true);

        try {
            await onCriar({ titulo, texto });

            setTitulo('');
            setTexto('');
        } catch (error) {
            console.error(error);
            alert('Erro ao salvar o recado.');
        } finally {
            setSalvando(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título"
                required
            />

            <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Texto do recado..."
                required
            />

            <button type="submit" disabled={salvando}>
                {salvando ? 'Salvando...' : 'Salvar'}
            </button>
        </form>
    );
}

export default RecadoForm;