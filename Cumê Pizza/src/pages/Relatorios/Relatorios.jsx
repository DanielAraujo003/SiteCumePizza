import React, { useState, useContext } from "react";
import { PedidosContext } from "../../components/PedidosContext/PedidosContext";
import "./Relatorios.css";
import {ChevronLeft, ChevronRight, CheckCircle, Clock} from "lucide-react";

export default function Relatorios() {

  const { pedidos, atualizarStatus } = useContext(PedidosContext);

  const todosPedidos = pedidos;

  const [indice, setIndice] = useState(0);

  // segurança caso não exista pedido
  if (todosPedidos.length === 0) {
    return <h2>Nenhum pedido encontrado</h2>;
  }

  const pedidoAtual = todosPedidos[indice];

  const statusAtual = pedidoAtual.status;

  const proximoPedido = () => {
    if (indice < todosPedidos.length - 1) {
      setIndice(indice + 1);
    }
  };

  const pedidoAnterior = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  };

  return (
    <div className="PedidosContainer">

      <div className="PedidosHeader">
        <h1>Acompanhamento de Pedidos</h1>

        <p className="Contador">
          Pedido {indice + 1} de {todosPedidos.length}
        </p>
      </div>

      <div className="CardPedidoGrande">

        <div className={`StatusBadge ${statusAtual}`}>

          {statusAtual === "andamento" ? (
            <>
              <Clock size={20} />
              Em Andamento
            </>
          ) : (
            <>
              <CheckCircle size={20} />
              Concluído
            </>
          )}

        </div>

        <div className="PedidoConteudo">

          <h2>Pedido #{pedidoAtual.id}</h2>

          <div className="InfoPedido">

            <div className="InfoItem">
              <label>👤 Cliente:</label>
              <p>{pedidoAtual.cliente}</p>
            </div>

            <div className="InfoItem">
              <label>🍕 Pizza:</label>
              <p>{pedidoAtual.pizza}</p>
            </div>

            <div className="InfoItem">
              <label>🥤 Bebida:</label>
              <p>{pedidoAtual.bebida}</p>
            </div>

          </div>

        </div>

        <button
          className={`BtnStatus ${statusAtual}`}
          onClick={() => atualizarStatus(pedidoAtual.id)}
        >

          {statusAtual === "andamento"
            ? "Marcar como Concluído"
            : "Marcar como Em Andamento"}

        </button>

      </div>

      <div className="Navegacao">

        <button
          className="BtnNavegacao anterior"
          onClick={pedidoAnterior}
          disabled={indice === 0}
        >
          <ChevronLeft size={24} />
          Anterior
        </button>

        <div className="Progresso">

          <div className="BarraProgresso">

            <div
              className="BarraPreenchida"
              style={{
                width: `${((indice + 1) / todosPedidos.length) * 100}%`
              }}
            ></div>

          </div>

        </div>

        <button
          className="BtnNavegacao proximo"
          onClick={proximoPedido}
          disabled={indice === todosPedidos.length - 1}
        >
          Próximo
          <ChevronRight size={24} />
        </button>

      </div>

      <div className="ResumoStatus">

        <div className="StatusInfo">
          <strong>Em Andamento:</strong>

          <span>
            {
              todosPedidos.filter(
                p => p.status === "andamento"
              ).length
            }
          </span>

        </div>

        <div className="StatusInfo">
          <strong>Concluídos:</strong>

          <span>
            {
              todosPedidos.filter(
                p => p.status === "concluido"
              ).length
            }
          </span>

        </div>

      </div>

    </div>
  );
}