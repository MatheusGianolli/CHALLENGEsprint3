
import { useState } from 'react';

export default function FaqPage() {
  
  const faqs = [
    {
      question: "❓ Como funciona o agendamento de uma teleconsulta?",
      answer: "Você pode agendar sua consulta diretamente pela nossa página inicial. Escolha a especialidade, o médico e o horário que preferir. Você receberá uma confirmação por e-mail com o link para a sua consulta virtual."
    },
    {
      question: "💻 Quais equipamentos eu preciso para a consulta?",
      answer: "Você precisará de um smartphone, tablet ou computador com acesso à internet, uma câmera e um microfone. Recomendamos o uso de fones de ouvido para maior privacidade e clareza de áudio."
    },
    {
      question: "💳 Como funciona o pagamento?",
      answer: "O pagamento é feito de forma segura através da nossa plataforma. Aceitamos cartões de crédito, débito e PIX. Se você tiver um plano de saúde conveniado, a cobrança será feita diretamente ao seu convênio."
    },
    {
      question: "🔒 Minha consulta é segura e privada?",
      answer: "Sim. Todas as nossas teleconsultas são realizadas em uma plataforma criptografada de ponta a ponta, garantindo total sigilo e segurança das suas informações, de acordo com a Lei Geral de Proteção de Dados (LGPD)."
    },
    {
      question: "📄 Eu recebo um atestado ou receita médica?",
      answer: "Sim. Se o médico julgar necessário, ele emitirá receitas, atestados e pedidos de exames com assinatura digital, que são válidos em todo o território nacional. Você receberá os documentos por e-mail e SMS."
    },
  ];

 
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  
  const handleToggle = (index: number) => {
    
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-hc-blue-dark">Perguntas Frequentes (FAQ)</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {}
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              {}
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left py-5 px-4 flex justify-between items-center hover:bg-gray-50 focus:outline-none transition-colors"
              >
                <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                {}
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-hc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </button>

              {}
              {openIndex === index && (
                <div className="p-4 pt-0 bg-white text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}