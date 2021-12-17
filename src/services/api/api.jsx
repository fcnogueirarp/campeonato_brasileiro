import axios from 'axios';

export default async function getApi2003() {
  const { data } = await axios.get('http://localhost:3000/2003');
  return data;
}
