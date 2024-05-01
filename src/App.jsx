import { useState } from "react";
import "./App.css";

function App() {

  const [receitas, setReceitas] = useState([]);
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [preparo, setPreparo] = useState("");
  const [nomePesquisa, setNomePesquisa] = useState("");
  const [receitasFiltradas, setReceitasFiltradas] = useState([]);

  const adicionarReceita = () => {

    const novaReceita = {
      nome: nome,
      ingredientes: ingredientes.split(',').map(item => item.trim()),
      preparo: preparo
    };

    receitas.push(novaReceita);
    console.log(receitas);

    setNome("");
    setIngredientes("");
    setPreparo("");
    alert("Receita cadastrada/alterada com sucesso!");

  };

  const todasReceitas = () => {
    if(receitas == "") {
      alert("Nenhuma receita Cadastrada!")
    }else{
      const filtradas = receitas.filter(receita => receita.nome.toLowerCase().includes(nomePesquisa.toLowerCase()));
      setReceitasFiltradas(filtradas);
    }
  };

  const pesquisarReceita = () => {
    if(nomePesquisa == "") {
      alert("Digite o nome de uma receita!")
    }else{
      const filtradas = receitas.filter(receita => receita.nome.toLowerCase().includes(nomePesquisa.toLowerCase()));
      setReceitasFiltradas(filtradas);
    }
  };

  const editarReceita = (index) => {
    const receitaAEditar = receitasFiltradas[index];
    setNome(receitaAEditar.nome);
    setIngredientes(receitaAEditar.ingredientes.join(", "));
    setPreparo(receitaAEditar.preparo);
    excluirReceita(index);
  };

  const excluirReceita = (index) => {
      const novasReceitas = receitas.filter((_, idx) => idx !== index);
      setReceitas(novasReceitas);
      setReceitasFiltradas([]);
  };

  return (
    <div className="container">
      <h1>Crud de Receitas Culinárias</h1>
        <div className="divMenu">
          <button onClick={todasReceitas}>Receitas</button>
          <button onClick={pesquisarReceita}>Pesquisar</button>
        </div>
        <div className="campoPesquisa">
          <input
              type="text"
              id="nomePesquisa"
              name="nomePesquisa"
              placeholder="Nome da receita para pesquisar"
              value={nomePesquisa}
              onChange={(e) => setNomePesquisa(e.target.value)}
          />
        </div>
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
          <label htmlFor="ingrediente">Ingredientes:</label>
          <input
            type="text"
            id="ingredientes"
            placeholder="Separe por vírgula os ingredientes:"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
          />
        </div>
        <div className="preparoReceita">
          <label htmlFor="modoDePreparo">Preparo:</label>
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
            <button onClick={adicionarReceita}>Cadastrar/Alterar</button>
        </div>
      <div className="receitasCadastradas">
        {receitasFiltradas.map((receita, index) => (
            <div className="divReceitas" key={index}>
                <h3>{receita.nome}</h3>
                <p className="pIngredientes">Ingredientes: {receita.ingredientes.join(", ")}</p>
                <p className="pIngredientes">Preparo: {receita.preparo}</p>
                <div className="buttonsPesquisa">
                <button onClick={() => editarReceita(index)}>Editar</button>
                <button onClick={() => excluirReceita(index)}>Excluir</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
