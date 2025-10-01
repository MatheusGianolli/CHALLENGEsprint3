
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
 
  const motivationalPhrases = [
    "Cuidar da sua saúde é um ato de coragem. Estamos aqui para ajudar.",
    "Um pequeno passo hoje para o seu bem-estar de amanhã.",
    "Você não está sozinho(a). Nossa equipe está a um clique de distância.",
    "Priorizar sua saúde é o maior investimento que você pode fazer.",
    "Gratidão pela vida não é dizer obrigado, é cuidar de si mesmo. ",
    "Olhe para si com olhos de amor e pratique o autocuidado, assim você apreciará quem realmente é."
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % motivationalPhrases.length);
    }, 5000); 

    return () => clearInterval(timer); 
  }, [motivationalPhrases.length]);
  // ---------------------------------------------------

  return (
    <div>
      {}
      <section className="bg-blue-50 text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-hc-blue-dark mb-4">
          Bem-vindo ao Atendimento Digital HC
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Sua saúde conectada a você, onde quer que esteja. Acesso rápido, seguro e humano a cuidados médicos de qualidade.
        </p>
        <div className="space-x-4">
          <Link to="/consulta/agendar" className="bg-hc-green hover:bg-hc-green-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Agendar Consulta
          </Link>
          <Link to="/faq" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Saiba Mais
          </Link>
        </div>
      </section>

      {}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg text-gray-600 italic">
            "{motivationalPhrases[currentPhraseIndex]}"
          </p>
        </div>
      </section>

      {}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">Como podemos te ajudar hoje?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {}
            <Link to="/consulta/agendar" className="block p-8 bg-white rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">📅</div>
              <h4 className="text-xl font-bold mb-2">Agendar Consulta</h4>
              <p className="text-gray-600">Encontre especialistas e marque sua teleconsulta em poucos minutos.</p>
            </Link>
            {}
            <Link to="/resultados" className="block p-8 bg-white rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-xl font-bold mb-2">Resultados de Exames</h4>
              <p className="text-gray-600">Acesse seus resultados de forma segura e prática, de qualquer lugar.</p>
            </Link>
            {}
            <Link to="/contato" className="block p-8 bg-white rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-xl font-bold mb-2">Fale com Suporte</h4>
              <p className="text-gray-600">Nossa equipe está pronta para ajudar com qualquer dúvida sobre a plataforma.</p>
            </Link>
          </div>
        </div>
      </section>

      {}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">Teleatendimento em 3 Passos Simples</h3>
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-10">
            <div className="flex-1">
              <div className="text-5xl mb-4">1️⃣</div>
              <h4 className="text-xl font-bold mb-2">Agende</h4>
              <p className="text-gray-600">Escolha o profissional e o melhor horário para você.</p>
            </div>
            <div className="text-2xl text-gray-300 hidden md:block">→</div>
            <div className="flex-1">
              <div className="text-5xl mb-4">2️⃣</div>
              <h4 className="text-xl font-bold mb-2">Conecte-se</h4>
              <p className="text-gray-600">No dia e hora marcados, acesse o link da consulta em seu dispositivo.</p>
            </div>
            <div className="text-2xl text-gray-300 hidden md:block">→</div>
            <div className="flex-1">
              <div className="text-5xl mb-4">3️⃣</div>
              <h4 className="text-xl font-bold mb-2">Fale com o Médico</h4>
              <p className="text-gray-600">Receba seu atendimento com a mesma qualidade e segurança de uma consulta presencial.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}