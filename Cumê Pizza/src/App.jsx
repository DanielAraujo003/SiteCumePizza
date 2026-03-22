import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Inicial from './pages/Inicial/Inicial';
import ListaPizza from './pages/ListaPizzas/ListaPizza';
import CadastrarCliente from './pages/RegistrarCliente/RegistrarCliente';

import Sidebar from './components/Sidebar/Sidebar';
//import ListaPizza from './pages/ListaPizza/ListaPizza';
//import CadastrarCliente from './pages/CadastrarCliente/CadastrarCliente';
import './App.css';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/lista-pizza" element={<ListaPizza />} />
        <Route path="/cadastrar-cliente" element={<CadastrarCliente />} />

      </Routes>
    </Router>
  );
}

export default App;
