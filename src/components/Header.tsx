// src/components/Header.tsx
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-blue-700">HC Teleatendimento</h1>
        <ul className="flex space-x-6">
          <li><NavLink to="/" className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600"}>Home</NavLink></li>
          <li><NavLink to="/sobre" className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600"}>Sobre</NavLink></li>
          <li><NavLink to="/faq" className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600"}>FAQ</NavLink></li>
          <li><NavLink to="/contato" className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600"}>Contato</NavLink></li>
          <li><NavLink to="/integrantes" className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600"}>Integrantes</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}