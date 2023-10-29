import { useState } from "react";
import { Link } from "react-router-dom";
import './account.css';

export default function Account() {

  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  async function handleSubmit(e) {
    if(name !== '' && code !== ''){
      alert('OK')
    }else {
      alert('Informe todos os dados')
    }
  }

  return(
    <div className="container">
      <h1>Cadastro de contas</h1>
      <span>Cadastre contas para melhor organização</span>

      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Digite um código para a conta"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Digite o nome da conta"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Salvar</button>
        <Link className="button-cancel" to="/">Cancelar</Link>

      </form>

    </div>
  )
}