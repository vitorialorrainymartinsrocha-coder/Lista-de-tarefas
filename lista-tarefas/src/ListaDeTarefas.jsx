import React, { useState } from 'react';
import './ListaDeTarefas.css';

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [textoTarefa, setTextoTarefa] = useState('');

  const adicionarTarefa = () => {
    if (textoTarefa) {
      setTarefas([...tarefas, textoTarefa]);
      setTextoTarefa('');
    }
  };

  return (
    <div className="TodoList">
      <h2>Lista de Tarefas</h2>
      <div className="input-row">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={textoTarefa}
          onChange={(e) => setTextoTarefa(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && adicionarTarefa()}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;