import { useEffect, useState } from 'react';
import Tabela from '../components/Table';

import { getApi2010 } from '../services/api/api';
import { getNewId } from '../services/uuid/uuid';

export default function Cb2010() {
  const [a2010, setA2010] = useState([]);

  let times = [];

  useEffect(() => {
    (async function getApi() {
      const api2010 = await getApi2010();
      setA2010(api2010[api2010.length - 1].partidas);
    })();
  }, []);

  (function dadosPrincipais() {
    a2010.map(dados => {
      return (
        times.push(dados.visitante),
        times.push(dados.pontuacao_geral_visitante.total_pontos),
        times.push(dados.pontuacao_geral_visitante.total_vitorias),
        times.push(dados.pontuacao_geral_visitante.total_empates),
        times.push(dados.pontuacao_geral_visitante.total_derrotas),
        times.push(dados.pontuacao_geral_visitante.total_gols_marcados),
        times.push(dados.pontuacao_geral_visitante.total_gols_sofridos),
        times.push(
          dados.pontuacao_geral_visitante.total_gols_marcados -
            dados.pontuacao_geral_visitante.total_gols_sofridos
        ),
        times.push(dados.mandante),
        times.push(dados.pontuacao_geral_mandante.total_pontos),
        times.push(dados.pontuacao_geral_mandante.total_vitorias),
        times.push(dados.pontuacao_geral_mandante.total_empates),
        times.push(dados.pontuacao_geral_mandante.total_derrotas),
        times.push(dados.pontuacao_geral_mandante.total_gols_marcados),
        times.push(dados.pontuacao_geral_mandante.total_gols_sofridos),
        times.push(
          dados.pontuacao_geral_mandante.total_gols_marcados -
            dados.pontuacao_geral_mandante.total_gols_sofridos
        )
      );
    });
  })();

  let timesSeparados = [];
  (function separaTimesEmVetores() {
    const qtde = 8;
    timesSeparados = times.reduce((vetor, item, index) => {
      const dividirIndex = Math.floor(index / qtde);

      if (!vetor[dividirIndex]) {
        vetor[dividirIndex] = [];
      }
      vetor[dividirIndex].push(item);
      return vetor;
    }, []);
  })();

  let top10 = timesSeparados
  .sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0))
  .filter((item, index) => {
    if (index < timesSeparados.length) return item;
    return '';
  });

// let campeao = timesSeparados
//   .sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0))
//   .filter((item, index) => {
//     if (index < 10) return item;
//     return '';
//   });

return (
  <>
    {top10.map(item => {
      return <Tabela key={getNewId()}>{item}</Tabela>;
    })}
  </>
);
}
