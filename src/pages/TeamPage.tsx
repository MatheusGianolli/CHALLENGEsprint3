export default function TeamPage() {
  const teamMembers = [
    { nome: "Enzo Xavier Coelho", rm: "RM563379", turma: "1TDSPV" },
    { nome: "Gustavo Ribeiro Permagnani", rm: "RM564995", turma: "1tdspv" },
    { nome: "Matheus Gianolli", rm: "RM565258", turma: "1tdspv" },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Integrantes do Projeto</h2>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {teamMembers.map((member, idx) => (
          <div
            key={member.rm}
            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4 ${idx !== teamMembers.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <div>
              <p className="font-medium text-gray-900">{member.nome}</p>
              <p className="text-sm text-gray-600">
                RM: <span className="font-mono tracking-tight">{member.rm}</span>
              </p>
            </div>
            <span className="self-start sm:self-auto text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
              {member.turma.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


