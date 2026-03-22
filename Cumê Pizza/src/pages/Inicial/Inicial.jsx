import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicial.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import pesquisarIcon from '../../assets/pesquisar.png';

export default function Inicial() {
    const [pesquisa, setPesquisa] = useState('');
    const [nomeUsuario] = useState('Jão');

    const handlePesquisa = (e) => {
        setPesquisa(e.target.value);
    };

    return (
        <div className="container-inicial">
            <Sidebar />


            <div className="Inicial">
                <div className="Texts">
                    <h3>Eai {nomeUsuario}</h3>
                    <h2 >Pedidos</h2>
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
                        placeholder="Digite seu nome..."
                        value={pesquisa}
                        onChange={handlePesquisa}
                    />
                </div>
            </div>
        </div>
    );
}
