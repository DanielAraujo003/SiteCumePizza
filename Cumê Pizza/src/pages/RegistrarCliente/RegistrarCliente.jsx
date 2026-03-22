import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import pesquisarIcon from '../../assets/pesquisar.png';
import telefoneIcon from '../../assets/telefone.png';
import locIcon from '../../assets/loc.png';
import './RegistrarCliente.css';

export default function CadastrarCliente() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    cep: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do cliente:', formData);
    // Aqui você faz a requisição para salvar o cliente
  };

  return (
    <div className="menu">
      <Sidebar />
      <div className="inicial">
        <div className="texts">
          <h2>Cadastro de Clientes</h2>
        </div>

        <form className="formulario" onSubmit={handleSubmit}>
          <div className="pesquisa">
            <img src={pesquisarIcon} alt="pesquisar" className="lupa" />
            <input
              type="text"
              className="input"
              name="nome"
              placeholder="Nome..."
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          <div className="pesquisa">
            <img src={telefoneIcon} alt="pesquisar" className="lupa" />
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email..."
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="pesquisa">
            <img src={locIcon} alt="pesquisar" className="lupa" />
            <input
              type="tel"
              className="input"
              name="telefone"
              placeholder="Telefone..."
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>

          <div className="pesquisa">
            <img src={locIcon} alt="pesquisar" className="lupa" />
            <input
              type="text"
              className="input"
              name="endereco"
              placeholder="Endereço..."
              value={formData.endereco}
              onChange={handleChange}
            />
          </div>

          <div className="pesquisa">
            <img src={locIcon} alt="pesquisar" className="lupa" />
            <input
              type="text"
              className="input"
              name="cidade"
              placeholder="Cidade..."
              value={formData.cidade}
              onChange={handleChange}
            />
          </div>

          <div className="pesquisa">
            <img src={locIcon} alt="pesquisar" className="lupa" />
            <input
              type="text"
              className="input"
              name="cep"
              placeholder="CEP..."
              value={formData.cep}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-cadastrar">
            Cadastrar Cliente
          </button>
        </form>
      </div>
    </div>
  );
}
