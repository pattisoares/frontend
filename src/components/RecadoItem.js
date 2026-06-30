import { useState } from 'react';

function RecadoItem({ recado, onEditar, onExcluir }) {
    const [editando, setEditando] = useState(false);
    const [editTitulo, setEditTitulo] = useState(recado.titulo);
    const [editTexto, setEditTexto] = useState(recado.texto);

    async function handleSalvar() {
        try {
            await onEditar(recado.id, {
                titulo: editTitulo,
                texto: editTexto,
            });

            setEditando(false);
        } catch (error) {
            console.error(error);
            alert('Erro ao editar o recado.');
        }
    }

    function handleCancelar() {
        setEditTitulo(recado.titulo);
        setEditTexto(recado.texto);
        setEditando(false);
    }

    if (editando) {
        return (
            <li>
                <input
                    type="text"
                    value={editTitulo}
                    onChange={(e) => setEditTitulo(e.target.value)}
                />

                <textarea
                    value={editTexto}
                    onChange={(e) => setEditTexto(e.target.value)}
                />

                <button onClick={handleSalvar}>
                    Salvar
                </button>

                <button onClick={handleCancelar}>
                    Cancelar
                </button>
            </li>
        );
    }

    return (
        <li>
            <strong>{recado.titulo}</strong>

            <p>{recado.texto}</p>

            <button onClick={() => setEditando(true)}>
                Editar
            </button>

            <button onClick={() => onExcluir(recado.id)}>
                Excluir
            </button>
        </li>
    );
}

export default RecadoItem;