import axios from 'axios';

export default function () {
  const token = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : 'false';

  const instance = axios.create({
    headers: {
      Authorization: token,
    },
  });

  return instance;
}
