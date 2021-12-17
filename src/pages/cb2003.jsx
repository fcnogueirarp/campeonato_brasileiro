import { useEffect, useState } from 'react';
import Tabela from '../components/Tabela';

import getApi2003 from '../services/api/api';
import { getNewId } from '../services/uuid/uuid';

export default function Cb2003() {
  const [a2003, setA2003] = useState([]);

  useEffect(() => {
    (async function getApi() {
      const api2003 = await getApi2003();
      setA2003(api2003[api2003.length - 1].partidas);
    })();
  }, []);

  return (
    <>
      {a2003.map(item => {
        const titulo = ['', 'P', 'V', 'E', 'D', 'GP', 'GC'];
        return (
          <Tabela key={getNewId()}>
            {titulo}
            {item.visitante}
            {item.pontuacao_geral_visitante.total_pontos}
            {item.pontuacao_geral_visitante.total_vitorias}
            {item.pontuacao_geral_visitante.total_empates}
            {item.pontuacao_geral_visitante.total_derrotas}
            {item.pontuacao_geral_visitante.total_gols_marcados}
            {item.pontuacao_geral_visitante.total_gols_sofridos}
            {item.mandante}
            {item.pontuacao_geral_mandante.total_pontos}
            {item.pontuacao_geral_mandante.total_vitorias}
            {item.pontuacao_geral_mandante.total_empates}
            {item.pontuacao_geral_mandante.total_derrotas}
            {item.pontuacao_geral_mandante.total_gols_marcados}
            {item.pontuacao_geral_mandante.total_gols_sofridos}
          </Tabela>
        );
      })}
    </>
  );
}

// a2003
// data_partida: "13/12/2003"
// estadio: "Pinheirão"
// hora_partida: "16h00"
// mandante: "Paraná"
// placar_mandante: 2
// placar_visitante: 0
// pontuacao_geral_mandante: {gols_fora_casa: 30, empates_fora_casa: 5, total_jogos: 46, gols_casa: 55, jogos_fora_casa: 23, …}
// pontuacao_geral_visitante: {gols_fora_casa: 20, empates_fora_casa: 6, total_jogos: 46, gols_casa: 30, jogos_fora_casa: 23, …}
// resultado: "vitoria_mandante"
// visitante: "Vitória"
