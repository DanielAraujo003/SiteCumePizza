import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './Registrar.css';
import imgPizza from '../../assets/imgPizza.png';

export default function Registro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigate = useNavigate();

  const handleRegistrar = () => {
    if (nome && email && senha && confirmarSenha) {
      if (senha === confirmarSenha) {
        alert('Cadastro realizado com sucesso!');
        navigate('/Inicial');
      } else {
        alert('As senhas não coincidem!');
      }
    } else {
      alert('Preencha todos os campos!');
    }
  };

  const handleVoltar = () => {
    navigate('/Login');
  };

  return (
    <div className="container">
      <div className="LdImg">
        <img src={imgPizza} alt="Pizza" />
      </div>

      <div className="LdForms">
        <h1 className="Registro">Registrar</h1>
        <input
          type="text"
          className="input"
          id="nome"
          placeholder="Digite seu nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          className="input"
          id="email"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          id="senha"
          placeholder="Digite sua senha..."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <input
          type="password"
          className="input"
          id="confirmarSenha"
          placeholder="Confirme sua senha..."
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        <div className="buttons">
          <button className="button" onClick={handleRegistrar}>
            Registrar
          </button>

        </div>




        <p className="voltarLogin">
          <a onClick={handleVoltar}>Já tem uma conta? Faça login aqui</a>
        </p>





      </div>
    </div>
  );
}