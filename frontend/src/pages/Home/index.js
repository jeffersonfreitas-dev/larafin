import { useState } from 'react';
import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConnect';
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Home (){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleLogin (e){
    e.preventDefault();
    if(email !== '' && password !== ''){
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/admin', {replace: true})
      }).catch((err) => {
        console.log(err)
      })
    }else {
      alert("Preencha todos os campos")
    }
  }

  return(
    <div className='container'>
      <h1>Larafin</h1>
      <span>Controle de finanças pessoais</span>

      <form className='form' onSubmit={handleLogin}>
        <input 
          type='text'
          placeholder='Digite seu email...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type='password'
          placeholder='***********'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>
          Acessar
        </button>
      </form>

      <Link className='button-link' to="/register">
        Não possui um aconta? Cadastre-se
      </Link>
    </div>
  )
}