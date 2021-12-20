export function dadosPrincipais(a2003, times) {
  a2003.map(dados => {
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
}

export function getTimesSeparados(timesSeparados) {
  let top = timesSeparados
    .sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0))
    .filter((item, index) => {
      if (index < timesSeparados.length) return item;
      return '';
    });
  return top;
}
