// src/pages/TeamPage.tsx
export default function TeamPage() {
  const teamMembers = [
    { nome: "Nome Completo 1", rm: "RM12345", turma: "Turma X" },
    { nome: "Nome Completo 2", rm: "RM54321", turma: "Turma Y" },
    // Adicione os outros integrantes aqui
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-6">Integrantes do Projeto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.rm} className="bg-white p-6 rounded-lg shadow-md">
            <p className="font-bold text-lg">{member.nome}</p>
            <p className="text-gray-700">RM: {member.rm}</p>
            <p className="text-gray-700">Turma: {member.turma}</p>
          </div>
        ))}
      </div>
    </div>
  );
}