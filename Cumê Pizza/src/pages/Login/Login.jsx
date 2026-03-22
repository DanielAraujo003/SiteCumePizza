import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './Login.css';
import imgPizza from '../../assets/imgPizza.png';

export default function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();


  const handleEntrar = () => {
    if (nome && senha) {
      navigate('/inicial');
    } else {
      alert('Preencha todos os campos!');
    }
  };

  const handleRegistrar = () => {
    // Redirecionar para página de registro
    window.location.href = '#';
  };

  return (
    <div className="container">
      <div className="LdImg">
        <img src={imgPizza} alt="Pizza" />
      </div>

      <div className="LdForms">
        <h1 className="Login">Login</h1>
        <input
          type="text"
          className="input"
          id="nome"
          placeholder="Digite seu nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="password"
          className="input"
          id="senha"
          placeholder="Digite sua senha..."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className="buttons">
          <button className="button" onClick={handleEntrar}>
            Entrar
          </button>
          <button className="button" onClick={handleRegistrar}>
            Registrar
          </button>
        </div>
        <p className="redefinirSenha">
          <a href="#">Esqueceu a senha?</a>
        </p>
      </div>
    </div>
  );
}
