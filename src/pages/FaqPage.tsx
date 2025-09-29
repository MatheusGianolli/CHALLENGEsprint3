// src/pages/FaqPage.tsx
// TODO: Transformar esta lista em um componente "Acordeão" interativo usando useState.
export default function FaqPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes (FAQ)</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-bold">Como agendar uma consulta?</h3>
          <p>Você pode agendar através da nossa página inicial clicando em...</p>
        </div>
        <div>
          <h3 className="font-bold">Onde vejo meus resultados de exames?</h3>
          <p>Os resultados estão disponíveis na seção "Resultados"...</p>
        </div>
      </div>
    </div>
  );
}