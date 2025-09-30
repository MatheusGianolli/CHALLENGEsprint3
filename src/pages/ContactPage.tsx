

import { useForm, type SubmitHandler } from "react-hook-form";


type FormInputs = {
  nome: string;
  email: string;
  mensagem: string;
};

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  
  const onSubmit: SubmitHandler<FormInputs> = data => {
    console.log(data);
    alert('Mensagem enviada com sucesso! (Verifique o console)');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6">

        {}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-hc-blue-dark mb-4">Estamos aqui para ajudar.</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Tem alguma dúvida, sugestão ou precisa de suporte? Use o formulário abaixo ou entre em contato por um de nossos canais.
          </p>
        </div>

        {/* Container Principal com Duas Colunas */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-12">

          {/* Coluna Esquerda: Informações de Contato */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Nossos Canais de Atendimento</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-3xl mr-4">📞</span>
                <div>
                  <h3 className="font-semibold text-lg">Suporte por Telefone</h3>
                  <p className="text-gray-600">Disponível de Seg a Sex, das 8h às 18h.</p>
                  <a href="tel:+5511999999999" className="text-hc-blue hover:underline font-semibold">(11) 99999-9999</a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-3xl mr-4">📧</span>
                <div>
                  <h3 className="font-semibold text-lg">Email Geral</h3>
                  <p className="text-gray-600">Para dúvidas e informações gerais.</p>
                  <a href="mailto:contato@hcteleatendimento.com.br" className="text-hc-blue hover:underline font-semibold">contato@hcteleatendimento.com.br</a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-3xl mr-4">📍</span>
                <div>
                  <h3 className="font-semibold text-lg">Nosso Endereço</h3>
                  <p className="text-gray-600">Av. Paulista, 1234 - São Paulo, SP</p>
                  <p className="text-gray-600">CEP: 01310-100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label htmlFor="nome" className="block mb-2 font-medium text-gray-700">Nome Completo</label>
                <input 
                  id="nome" 
                  {...register("nome", { required: "O nome é obrigatório" })} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hc-blue-light transition-shadow"
                  placeholder="Seu nome completo"
                />
                {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  {...register("email", { required: "O email é obrigatório" })} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hc-blue-light transition-shadow"
                  placeholder="seu.email@exemplo.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div className="mb-5">
                <label htmlFor="mensagem" className="block mb-2 font-medium text-gray-700">Mensagem</label>
                <textarea 
                  id="mensagem" 
                  {...register("mensagem", { required: "A mensagem é obrigatória" })} 
                  className="w-full p-3 border border-gray-300 rounded-lg h-36 focus:outline-none focus:ring-2 focus:ring-hc-blue-light transition-shadow"
                  placeholder="Escreva sua dúvida ou sugestão aqui..."
                ></textarea>
                {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
              </div>
              <button 
                type="submit" 
                className="w-full bg-hc-green hover:bg-hc-green-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}