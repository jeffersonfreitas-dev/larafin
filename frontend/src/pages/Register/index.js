import { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebaseConnect';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

export default function Register (){ 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  async function handleRegister (e){
    e.preventDefault();
    if(email !== '' && password !== '' && name !== ''){
      await createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        handlePersistUser(result.user.uid);
        navigate("/admin", {replace: true});
      }).catch((error) => {
        console.log(error);
        alert(error);
      })
    }else {
      alert("Preencha todos os campos")
    }
  }

  async function handlePersistUser(uid) {
    await setDoc(doc(db, 'users', uid), {
      userId: uid,
      name: name,
      email: email 
    })
  }

  return(
    <div className='container'>
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta</span>

      <form className='form' onSubmit={handleRegister}>
        <input 
          type='text'
          placeholder='Digite seu nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          Cadastrar
        </button>
      </form>

      <Link className='button-link' to="/">
        Já possui um conta? Faça o login
      </Link>
    </div>
  )
}