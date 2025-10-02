export default function TeamPage() {
  const teamMembers = [
    { nome: "Enzo Xavier Coelho", rm: "RM563379", turma: "1TDSPV" },
    { nome: "Gustavo Ribeiro Permagnani", rm: "RM564995", turma: "1tdspv" },
    { nome: "Matheus Gianolli", rm: "RM565258", turma: "1tdspv" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold mb-8">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Integrantes do Projeto
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {teamMembers.map((member) => (
            <div
              key={member.rm}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_0_0_1px_rgba(16,185,129,0.1)] hover:shadow-[0_0_0_2px_rgba(16,185,129,0.25)] transition-shadow"
            >
              <p className="text-xl font-semibold">{member.nome}</p>
              <p className="text-slate-300 mt-2">RM: {member.rm}</p>
              <span className="inline-block mt-3 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-500/30 text-emerald-300">
                {member.turma.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


