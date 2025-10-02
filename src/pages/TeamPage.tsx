export default function TeamPage() {
  const teamMembers = [
    { nome: "Enzo Xavier Coelho", rm: "RM563379", turma: "1TDSPV" },
    { nome: "Gustavo Ribeiro Permagnani", rm: "RM564995", turma: "1tdspv" },
    { nome: "Matheus Gianolli", rm: "RM565258", turma: "1tdspv" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-fuchsia-200 to-rose-200">
      <div className="container mx-auto px-6 py-14">
        <h2 className="text-4xl font-black mb-10 text-slate-900/90">
          Integrantes do Projeto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {teamMembers.map((member) => (
            <div
              key={member.rm}
              className="rounded-3xl p-6 border border-white/30 bg-white/20 backdrop-blur-xl shadow-lg"
            >
              <div className="flex items-start justify-between">
                <p className="font-semibold text-lg text-slate-900/90">{member.nome}</p>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/40 text-slate-800 border border-white/50">
                  {member.turma.toUpperCase()}
                </span>
              </div>
              <p className="text-slate-800/80 mt-2">RM: {member.rm}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



