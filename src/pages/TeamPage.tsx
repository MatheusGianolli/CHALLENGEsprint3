export default function TeamPage() {
  const teamMembers = [
    { nome: "Enzo Xavier Coelho", rm: "RM563379", turma: "1TDSPV" },
    { nome: "Gustavo Ribeiro Permagnani", rm: "RM564995", turma: "1tdspv" },
    { nome: "Matheus Gianolli", rm: "RM565258", turma: "1tdspv" },
  ];

  const getInitials = (n: string) =>
    n.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-10">
        <h2 className="text-4xl font-black bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
          Integrantes do Projeto
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {teamMembers.map((member) => (
          <div
            key={member.rm}
            className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-200 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full grid place-items-center font-bold text-white bg-gradient-to-br from-indigo-600 to-fuchsia-600">
                {getInitials(member.nome)}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg">{member.nome}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>RM: {member.rm}</span>
                  <span className="mx-1">•</span>
                  <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
                    {member.turma.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

