import React, { createContext, useState } from "react";

export const PedidosContext = createContext();

export function PedidosProvider({ children }) {
    const [pedidos, setPedidos] = useState([
        {
            id: 1,
            cliente: "João", // ← Padronizado para 'cliente'
            pizza: "Calabresa",
            bebida: "Guaraná",
            valor: 45.90, // ← Adicionado valor
            status: "andamento"
        },
        {
            id: 2,
            cliente: "Maria", // ← Padronizado para 'cliente'
            pizza: "Frango com Catupiry",
            bebida: "Coca-Cola",
            valor: 52.90, // ← Adicionado valor
            status: "concluido"
        },
        {
            id: 3,
            cliente: "Carlos", // ← Padronizado para 'cliente'
            pizza: "Portuguesa",
            bebida: "Fanta",
            valor: 48.90, // ← Adicionado valor
            status: "andamento"
        },
        {
            id: 4,
            cliente: "Ana", // ← Padronizado para 'cliente'
            pizza: "Mussarela",
            bebida: "Guaraná",
            valor: 42.90, // ← Adicionado valor
            status: "andamento"
        },
        {
            id: 5,
            cliente: "Pedro", // ← Padronizado para 'cliente'
            pizza: "Baiana",
            bebida: "Coca-Cola",
            valor: 49.90, // ← Adicionado valor
            status: "concluido"
        },
        {
            id: 6,
            cliente: "Lucas", // ← Padronizado para 'cliente'
            pizza: "Calabresa",
            bebida: "Sprite",
            valor: 45.90, // ← Adicionado valor
            status: "andamento"
        }
    ]);

    const atualizarStatus = (id) => {
        const novosPedidos = pedidos.map(p =>
            p.id === id
                ? {
                    ...p,
                    status: p.status === "andamento" ? "concluido" : "andamento"
                }
                : p
        );
        setPedidos(novosPedidos);
    };

    return (
        <PedidosContext.Provider
            value={{
                pedidos,
                setPedidos,
                atualizarStatus
            }}
        >
            {children}
        </PedidosContext.Provider>
    );
}