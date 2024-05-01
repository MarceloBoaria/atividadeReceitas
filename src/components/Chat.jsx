import { useState } from "react";
import "./App.css";

const receitas = [];

function App() {
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [preparo, setPreparo] = useState("");
  const [ingredienteAtual, setIngredienteAtual] = useState("");

  const adicionarReceita = () => {
    const novaReceita = {
      nome,
      ingredientes,
      preparo,
    };
    receitas.push(novaReceita);
  };

  const adicionarIngrediente = () => {
    setIngredientes((prevIngredientes) => [...prevIngredientes, ingredienteAtual]);
    setIngredienteAtual("");
  };

  function pesquisarReceita(nomeReceita) {
    const resultado = receitas.find((receita) => receita.nome.toLowerCase() === nomeReceita.toLowerCase());
    return resultado;
  }

  return (
    <div className="container">
      <h1>Crud de Receitas Culinárias</h1>
      <button onClick={() => {
        const receitaEncontrada = pesquisarReceita(prompt('Digite o nome da receita que deseja pesquisar:'));
        if (receitaEncontrada) {
          alert(`Receita encontrada: ${receitaEncontrada.nome}`);
        } else {
          alert('Receita não encontrada');
        }
      }}>Pesquisar Receita</button>
      <br />
      <div className="nomeReceita">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nome da receita:"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="ingredientes">
        <label htmlFor="ingrediente">Ingrediente:</label>
        <input
          type="text"
          id="ingrediente"
          placeholder="Ingrediente:"
          value={ingredienteAtual}
          onChange={(e) => setIngredienteAtual(e.target.value)}
        />
        <button onClick={adicionarIngrediente}>Adicionar Ingrediente</button>
      </div>
      <div>
        <ul>
          {ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      </div>
      <div className="preparoReceita">
        <label htmlFor="modoDePreparo">Modo de Preparo:</label>
        <input
          type="text"
          id="modoDePreparo"
          name="modoDePreparo"
          placeholder="Modo de Preparo:"
          value={preparo}
          onChange={(e) => setPreparo(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button onClick={adicionarReceita}>Cadastrar</button>
      </div>
      <div className="receitasCadastradas">
        <h3>Receitas cadastradas:</h3>
        {receitas.map((receita, index) => (
          <div key={index}>
            <h4>{receita.nome}</h4>
            <p>Ingredientes:</p>
            <ul>
              {receita.ingredientes.map((ingrediente, idx) => (
                <li key={idx}>{ingrediente}</li>
              ))}
            </ul>
            <p>Preparo: {receita.preparo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
