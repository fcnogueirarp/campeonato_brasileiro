import '../styles/Table.css';
import { useEffect, useState } from 'react';

export default function Tabela({ children }) {
  const [contador, setContador] = useState();

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
  console.log(nome);

  useEffect(() => {
    (function soma1() {
      let teste = 0;
      setContador(teste + 1);
    })();
  }, []);
  return (
    <>
      <div className="container-tabela">
        <span className="tabela">{contador}</span>
        <span className="tabela">
          <span>
            <img src={`/img/${nome}.png`} alt={'brasão do time'} />
          </span>
        </span>
        <span className="tabela">{nome}</span>
        <span className="tabela">{pontos}</span>
        <span className="tabela"> {vitorias}</span>
        <span className="tabela">{empates}</span>
        <span className="tabela">{derrotas}</span>
        <span className="tabela">{total_gols_marcados}</span>
        <span className="tabela"> {total_gols_sofridos}</span>
        <span className="tabela"> {saldo}</span>
      </div>
    </>
  );
}
