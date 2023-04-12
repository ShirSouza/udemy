import { useState, useEffect } from 'react';

function App(){
  const [input, setInput] = useState(''); //vazio
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]); //já com 2 itens na lista

  
 
  function handleRegister(e){
    e.preventDefault(); ///evita o F5

    setTarefas([...tarefas, input]);
    setInput('');

  };

  return(
    <div>
      <h1>Cadastrando usuario</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br/>
        <input 
         placeholder="Digite uma tarefa" 
         value={input}
         onChange={ (e) => setInput(e.target.value) }
        /><br/>
        <button type="submit">Registrar</button>
      </form>

      <br/><br/>

      <ul>
        
        {tarefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;

