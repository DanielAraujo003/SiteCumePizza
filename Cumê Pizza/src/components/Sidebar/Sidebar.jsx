import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';
import inicialIcon from '../../assets/inicial.png';
import listaPizzaIcon from '../../assets/listaDePizza.png';
import cadastrarClienteIcon from '../../assets/cadastrarCliente.png';
import voltarIcon from '../../assets/Voltar.png';
import relatoriosIcon from '../../assets/relatorios.png';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = React.useState('');

  const menuItems = [
    { icon: inicialIcon, alt: 'inicial', path: '/Inicial' },
    { icon: listaPizzaIcon, alt: 'lista', path: '/ListaPizzas' },
    { icon: cadastrarClienteIcon, alt: 'cadastrarCliente', path: '/CadastrarCliente' },
    { icon: relatoriosIcon, alt: 'relatorios', path: '/Relatorios' },
  ];

  useEffect(() => {
    // Define qual link está ativo baseado na rota atual
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="sidebar">
      <ul className="lista">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`icons ${activeLink === item.path ? 'active' : ''}`}
            onClick={() => handleNavigation(item.path)}
          >

            <img src={item.icon} alt={item.alt} />

          </li>
        ))}
      </ul>

      <div className="footer-icon" onClick={handleLogout}>

        <img src={voltarIcon} alt="voltar" />

      </div>
    </nav>
  );
}
