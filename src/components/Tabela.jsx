import '../styles/Tabela.css';

export default function Tabela({ children }) {
  const [
    nome,
    pontos,
    vitorias,
    empates,
    derrotas,
    total_gols_marcados,
    total_gols_sofridos,
    saldo,
  ] = children;
  return (
    <div
      className={`
        flex justify-center items-center 
        px-40 py-2 m-8 
        w-screen h-auto`}
    >
      <span className="tabela">{1}</span>
      <span className="tabela">{nome}</span>
      <span className="tabela">{pontos}</span>
      <span className="tabela"> {vitorias}</span>
      <span className="tabela">{empates}</span>
      <span className="tabela">{derrotas}</span>
      <span className="tabela">{total_gols_marcados}</span>
      <span className="tabela"> {total_gols_sofridos}</span>
      <span className="tabela"> {saldo}</span>
    </div>
  );
}
