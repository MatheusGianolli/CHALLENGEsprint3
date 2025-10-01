
export default function TeamPage() {
  const teamMembers = [
    { nome: "Enzo Xavier Coelho", rm: "RM563379", turma: "1TDSPV" },
    { nome: "Gustavo Ribeiro Permagnani", rm: "RM564995", turma: "1tdspv" },
    { nome: "Matheus Gianolli", rm: "RM565258", turma: "1tdspv"},
    
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