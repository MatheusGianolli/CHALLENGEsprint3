export default function TeamPage() {
  const teamMembers = [
    { nome: "Enzo Xavier Coelho", rm: "RM563379", turma: "1TDSPV" },
    { nome: "Gustavo Ribeiro Permagnani", rm: "RM564995", turma: "1tdspv" },
    { nome: "Matheus Gianolli", rm: "RM565258", turma: "1tdspv" },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 tracking-tight">Integrantes do Projeto</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.rm}
            className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg">{member.nome}</p>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                {member.turma.toUpperCase()}
              </span>
            </div>
            <p className="text-gray-600 mt-2">RM: {member.rm}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
