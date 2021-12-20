import Cabecalho from '../components/Header';
import Cards from '../components/Cards';

import Select from '../components/Select';

export default function Principal() {
  return (
    <div>
      <Cabecalho />
      <br />
      <Select />
      <Cards />
    </div>
  );
}
