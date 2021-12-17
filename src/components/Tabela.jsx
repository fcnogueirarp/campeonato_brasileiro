export default function Tabela({ children }) {
  const [
    titulo,
    visitantes,
    pontos,
    vitorias,
    empates,
    derrotas,
    golsFeitos,
    golsSofridos,
    mandantes,
    mpontos,
    mvitorias,
    mempates,
    mderrotas,
    mgolsFeitos,
    mgolsSofridos,
  ] = children;

  return (
    <>
      <div>
        <div className="flex justify-between align-middle items-center w-screen py-4 px-96">
          <span className="flex justify-right w-1/6">{visitantes}</span>
          <div className="flex justify-right w-screen">
            <span className="flex justify-right w-1/6">{pontos}</span>
            <span className="flex justify-right w-1/6">{vitorias}</span>
            <span className="flex justify-right w-1/6">{empates}</span>
            <span className="flex justify-right w-1/6">{derrotas}</span>
            <span className="flex justify-right w-1/6">{golsFeitos}</span>
            <span className="flex justify-right w-1/6">{golsSofridos}</span>
          </div>
          <span>{golsFeitos - golsSofridos}</span>
        </div>
        <div className="flex justify-between align-middle items-center w-screen py-4 px-96">
          <span className="flex justify-right w-1/6">{mandantes}</span>
          <div className="flex justify-right w-screen">
            <span className="flex justify-right w-1/6">{mpontos}</span>
            <span className="flex justify-right w-1/6">{mvitorias}</span>
            <span className="flex justify-right w-1/6">{mempates}</span>
            <span className="flex justify-right w-1/6">{mderrotas}</span>
            <span className="flex justify-right w-1/6">{mgolsFeitos}</span>
            <span className="flex justify-right w-1/6">{mgolsSofridos}</span>
          </div>
          <span>{mgolsFeitos - mgolsSofridos}</span>
        </div>
      </div>
    </>
  );
}
