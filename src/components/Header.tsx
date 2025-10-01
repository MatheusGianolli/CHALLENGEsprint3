// src/components/Header.tsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-hc-blue-dark">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            HC Teleatendimento
          </NavLink>
        </h1>

        {}
        <ul className="hidden md:flex space-x-6">
          <li><NavLink to="/" className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600 hover:text-blue-700"}>Home</NavLink></li>
          <li><NavLink to="/sobre" className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600 hover:text-blue-700"}>Sobre</NavLink></li>
          <li><NavLink to="/faq" className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600 hover:text-blue-700"}>FAQ</NavLink></li>
          <li><NavLink to="/contato" className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600 hover:text-blue-700"}>Contato</NavLink></li>
          <li><NavLink to="/integrantes" className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600 hover:text-blue-700"}>Integrantes</NavLink></li>
        </ul>

        {}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            {isMenuOpen ? (
              // Ícone "X" para fechar
              <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              // Ícone "Hambúrguer" para abrir
              <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </nav>

      {}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t`}>
        <ul className="flex flex-col items-center py-4">
          <li className="w-full text-center py-2"><NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600"}>Home</NavLink></li>
          <li className="w-full text-center py-2"><NavLink to="/sobre" onClick={() => setIsMenuOpen(false)} className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600"}>Sobre</NavLink></li>
          <li className="w-full text-center py-2"><NavLink to="/faq" onClick={() => setIsMenuOpen(false)} className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600"}>FAQ</NavLink></li>
          <li className="w-full text-center py-2"><NavLink to="/contato" onClick={() => setIsMenuOpen(false)} className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600"}>Contato</NavLink></li>
          <li className="w-full text-center py-2"><NavLink to="/integrantes" onClick={() => setIsMenuOpen(false)} className={({isActive}) => isActive ? "text-blue-700 font-bold" : "text-gray-600"}>Integrantes</NavLink></li>
        </ul>
      </div>
    </header>
  );
}