import { useEffect, useState } from 'react';
import Tabela from '../components/Table';
import { dadosPrincipais, getTimesSeparados } from '../helpers/functions';

import { getApi2003 } from '../services/api/api';
import { getNewId } from '../services/uuid/uuid';

export default function Cb2003() {
  const [a2003, setA2003] = useState([]);

  let times = [];

  useEffect(() => {
    (async function getApi() {
      const api2003 = await getApi2003();
      setA2003(api2003[api2003.length - 1].partidas);
    })();
  }, []);

  dadosPrincipais(a2003, times);

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
    return timesSeparados;
  })();

  let top10 = getTimesSeparados(timesSeparados);

  return (
    <>
      {top10.map(item => {
        return <Tabela key={getNewId()}>{item}</Tabela>;
      })}
    </>
  );
}
