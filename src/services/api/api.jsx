import axios from 'axios';

export async function getApi2003() {
  const { data } = await axios.get('http://localhost:3000/2003');
  return data;
}

export async function getApi2004() {
  const { data } = await axios.get('http://localhost:3000/2004');
  return data;
}
