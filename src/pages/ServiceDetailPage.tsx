
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ServiceDetailPage() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

 
  useEffect(() => {
    
    console.log(`Carregando informações para a especialidade: ${id}`);
  }, [id]); 

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-4">
        Detalhes do Serviço: <span className="capitalize text-blue-700">{id}</span>
      </h2>
      <p>Aqui seriam exibidas informações detalhadas sobre a especialidade de {id}.</p>
      
      <button 
        onClick={() => navigate('/')} 
        className="mt-6 bg-gray-700 text-white px-6 py-2 rounded font-bold hover:bg-gray-800">
        Voltar para a Home
      </button>
    </div>
  );
}