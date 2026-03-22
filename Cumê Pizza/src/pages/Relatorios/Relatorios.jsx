import "./Relatorios.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import { DollarSign, ShoppingBag, Users } from "lucide-react";

function Relatorios() {

  const pedidos = [
    {
      id: 1,
      cliente: "João",
      valor: 45,
      status: "Entregue"
    },
    {
      id: 2,
      cliente: "Maria",
      valor: 62,
      status: "Preparando"
    },
    {
      id: 3,
      cliente: "Carlos",
      valor: 39,
      status: "Cancelado"
    }
  ];
  return (
    <div className="Relatorios">
      <Sidebar />

      <div className="Relatorios-Header">
        <h1>Relatórios</h1>
        <p>Acompanhe o desempenho da pizzaria</p>
      </div>

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
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#001</td>
              <td>João</td>
              <td>R$ 45,00</td>
              <td className="Status entregue">
                Entregue
              </td>
            </tr>

            <tr>
              <td>#002</td>
              <td>Maria</td>
              <td>R$ 62,00</td>
              <td className="Status preparando">
                Preparando
              </td>
            </tr>

            <tr>
              <td>#003</td>
              <td>Carlos</td>
              <td>R$ 39,00</td>
              <td className="Status cancelado">
                Cancelado
              </td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Relatorios;