import React, { useState } from 'react';
import './ListaPizza.css';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function ListaPizza() {
  const [pizzas] = useState([
    { id: 1, nome: 'Margherita', preco: 35.00, descricao: 'Tomate, mozzarela, manjericão' },
    { id: 2, nome: 'Pepperoni', preco: 40.00, descricao: 'Tomate, mozzarela, pepperoni' },
    { id: 3, nome: 'Quatro Queijos', preco: 45.00, descricao: 'Mozzarela, gorgonzola, parmesão, ricota' },
    { id: 4, nome: 'Frango com Catupiry', preco: 42.00, descricao: 'Frango, catupiry, cebola' },
  ]);

  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (pizza) => {
    setCarrinho([...carrinho, pizza]);
    alert(`${pizza.nome} adicionada ao carrinho!`);
  };

  return (
    <div className="container-lista">
      <Sidebar />
      
      <div className="lista-container">
        <div className="header-lista">
          <h1>Lista de Pizzas</h1>
          <p>Escolha suas pizzas favoritas</p>
        </div>

        <div className="pizzas-grid">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="pizza-card">
              <div className="pizza-imagem">
                <img src="https://via.placeholder.com/200" alt={pizza.nome} />
              </div>
              <div className="pizza-info">
                <h3>{pizza.nome}</h3>
                <p className="descricao">{pizza.descricao}</p>
                <p className="preco">R$ {pizza.preco.toFixed(2)}</p>
                <button 
                  className="btn-adicionar"
                  onClick={() => adicionarAoCarrinho(pizza)}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="carrinho-info">
          <p>Itens no carrinho: <strong>{carrinho.length}</strong></p>
        </div>
      </div>
    </div>
  );
}
