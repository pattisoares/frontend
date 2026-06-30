import { useEffect, useState } from 'react';
import api from '../services/api';
import RecadoForm from '../components/RecadoForm';
import RecadoItem from '../components/RecadoItem';

function Recados() {
    const [recados, setRecados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        carregarRecados();
    }, []);

    async function carregarRecados() {
        try {
            const { data } = await api.get('/recados');
            setRecados(data);
        } catch (error) {
            setErro('Erro ao carregar os recados.');
            console.error(error);
        } finally {
            setCarregando(false);
        }
    }

    async function handleCriar(campos) {
        try {
            const { data } = await api.post('/recados', campos);
            setRecados(prev => [data, ...prev]);
        } catch (error) {
            console.error(error);
            alert('Erro ao criar o recado.');
        }
    }

    async function handleEditar(id, campos) {
        try {
            await api.put(`/recados/${id}`, campos);

            setRecados(prev =>
                prev.map(recado =>
                    recado.id === id
                        ? { ...recado, ...campos }
                        : recado
                )
            );
        } catch (error) {
            console.error(error);
            alert('Erro ao editar o recado.');
        }
    }

    async function handleExcluir(id) {
        if (!window.confirm('Excluir este recado?')) {
            return;
        }

        try {
            await api.delete(`/recados/${id}`);

            setRecados(prev =>
                prev.filter(recado => recado.id !== id)
            );
        } catch (error) {
            console.error(error);
            alert('Erro ao excluir o recado.');
        }
    }

    if (carregando) {
        return <p>Carregando...</p>;
    }

    if (erro) {
        return <p>{erro}</p>;
    }

    return (
        <div>
            <h1>Meus Recados</h1>

            <RecadoForm onCriar={handleCriar} />

            {recados.length === 0 ? (
                <p>Nenhum recado cadastrado.</p>
            ) : (
                <ul>
                    {recados.map((recado) => (
                        <RecadoItem
                            key={recado.id}
                            recado={recado}
                            onEditar={handleEditar}
                            onExcluir={handleExcluir}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Recados;