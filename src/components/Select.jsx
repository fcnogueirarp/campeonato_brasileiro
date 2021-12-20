import { useState } from 'react';
import { anos } from '../helpers/years';
import { getNewId } from '../services/uuid/uuid';

export default function Select() {
  const [ano, setAno] = useState();

  let valor = null;
  function handleSelect(event) {
    valor = event.target.value;
    console.log(valor);
  }

  return (
    <div className="flex justify-center ">
      <select onChange={handleSelect}>
        {anos.map(item => {
          return (
            <option key={getNewId()} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
