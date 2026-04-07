import React, { useState, useContext } from 'react';
import { PedidosContext } from "../../components/PedidosContext/PedidosContext";
import { useNavigate } from 'react-router-dom';
import './Inicial.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import pesquisarIcon from '../../assets/pesquisar.png';
import { DollarSign, ShoppingBag, Users, Plus, X, Trash2 } from "lucide-react";

export default function Inicial() {
    const [pesquisa, setPesquisa] = useState('');
    const [nomeUsuario] = useState('Daniel');
    const { pedidos, setPedidos } = useContext(PedidosContext);

    const handlePesquisa = (e) => {
        setPesquisa(e.target.value);
    };

    const handleCriarPedido = () => {
        alert('Redirecionar para criar novo pedido');
    };

    const handleCancelarPedido = (id) => {
        const pedidoAtualizado = pedidos.map(pedido =>
            pedido.id === id ? { ...pedido, status: "Cancelado" } : pedido
        );
        setPedidos(pedidoAtualizado);
    };

    const handleExcluirPedido = (id) => {
        if (window.confirm('Tem certeza que deseja excluir este pedido?')) {
            const pedidosFiltrados = pedidos.filter(pedido => pedido.id !== id);
            setPedidos(pedidosFiltrados);
        }
    };

    return (
        <div className="container-inicial">
            <Sidebar />

            <div className="Inicial">
                <div className="Texts">
                    <h3>Eai {nomeUsuario}</h3>
                    <h2>Pedidos</h2>
                </div>

                <div className="Pesquisa">
                    <img
                        src={pesquisarIcon}
                        alt="pesquisar"
                        className="Lupa"
                    />
                    <input
                        type="text"
                        className="Input"
                        placeholder="Pesquisar"
                        value={pesquisa}
                        onChange={handlePesquisa}
                    />
                </div>

                <div className="Relatorios">
                    <div className="Relatorios-Header"></div>

                    <div className="Relatorios-Cards">
                        <div className="Relatorio-Card">
                            <div className="Icon">
                                <DollarSign size={28} />
                            </div>
                            <div className="Card-Info">
                                <h2>R$ 3.250,00</h2>
                                <p>Faturamento Hoje</p>
                            </div>
                        </div>

                        <div className="Relatorio-Card">
                            <div className="Icon">
                                <ShoppingBag size={28} />
                            </div>
                            <div className="Card-Info">
                                <h2>87</h2>
                                <p>Pedidos Hoje</p>
                            </div>
                        </div>

                        <div className="Relatorio-Card">
                            <div className="Icon">
                                <Users size={28} />
                            </div>
                            <div className="Card-Info">
                                <h2>42</h2>
                                <p>Clientes Ativos</p>
                            </div>
                        </div>
                    </div>

                    <div className="Relatorios-Tabela">
                        <h2>Últimos Pedidos</h2>

                        <table>
                            <thead>
                                <tr>
                                    <th>Pedido</th>
                                    <th>Cliente</th>
                                    <th>Valor</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pedidos.map((pedido) => (
                                    <tr key={pedido.id}>
                                        <td>#{String(pedido.id).padStart(3, '0')}</td>
                                        <td>{pedido.nome || pedido.cliente || 'N/A'}</td>
                                        <td>R$ {(pedido.valor ?? 0).toLocaleString('pt-BR', { 
                                            minimumFractionDigits: 2, 
                                            maximumFractionDigits: 2 
                                        })}</td>
                                        <td className={`Status ${pedido.status?.toLowerCase().replace(' ', '') || 'andamento'}`}>
                                            {pedido.status || 'Em Andamento'}
                                        </td>
                                        <td className="Acoes-Cell">
                                            <button
                                                className="Btn-Cancelar"
                                                onClick={() => handleCancelarPedido(pedido.id)}
                                                title="Cancelar pedido"
                                            >
                                                <X size={18} />
                                            </button>
                                            <button
                                                className="Btn-Excluir"
                                                onClick={() => handleExcluirPedido(pedido.id)}
                                                title="Excluir pedido"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="Botoes-Acoes">
                            <button className="Btn-Criar" onClick={handleCriarPedido}>
                                <Plus size={20} />
                                Criar Pedido
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} // ← Removido o parêntese extra