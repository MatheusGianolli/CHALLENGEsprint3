// src/pages/ContactPage.tsx

// A correção está nesta linha:
import { useForm, type SubmitHandler } from "react-hook-form";

// Define a "forma" dos dados do nosso formulário
type FormInputs = {
  nome: string;
  email: string;
  mensagem: string;
};

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  
  // Usamos o SubmitHandler para garantir que 'data' seja do tipo 'FormInputs'
  const onSubmit: SubmitHandler<FormInputs> = data => {
    console.log(data);
    alert('Mensagem enviada com sucesso! (Verifique o console)');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-4">Fale Conosco</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="nome" className="block mb-1">Nome Completo</label>
          <input id="nome" {...register("nome", { required: "O nome é obrigatório" })} className="w-full p-2 border rounded"/>
          {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input id="email" type="email" {...register("email", { required: "O email é obrigatório" })} className="w-full p-2 border rounded"/>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="mensagem" className="block mb-1">Mensagem</label>
          <textarea id="mensagem" {...register("mensagem", { required: "A mensagem é obrigatória" })} className="w-full p-2 border rounded h-32"></textarea>
          {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
        </div>
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-bold hover:bg-blue-800">
          Enviar
        </button>
      </form>
    </div>
  );
}