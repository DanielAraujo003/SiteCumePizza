import React from 'react';
import { PedidosProvider } from './components/PedidosContext/PedidosContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Registro from './pages/Registrar/Registrar';
import Inicial from './pages/Inicial/Inicial';
import ListaPizza from './pages/ListaPizzas/ListaPizza';
import CadastrarCliente from './pages/RegistrarCliente/RegistrarCliente';
import Relatorios from './pages/Relatorios/Relatorios';


import './App.css';




function App() {
  return (
    <PedidosProvider>
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registrar" element={<Registro />} />
          <Route path="/Inicial" element={<Inicial />} />
          <Route path="/ListaPizzas" element={<ListaPizza />} />
          <Route path="/CadastrarCliente" element={<CadastrarCliente />} />
          <Route path="/Relatorios" element={<Relatorios />} />
        </Routes>
      </Router>


    </PedidosProvider>


  );
}

export default App;
