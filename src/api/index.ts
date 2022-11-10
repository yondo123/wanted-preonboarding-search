import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:4000/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

const requestGetApi = (keyword: string) =>
  instance({
    url: 'sick',
    method: 'GET',
    params: { sickNm_like: keyword },
  }).then((response) => {
    console.log('[CALL API]');
    return response;
  });

export default requestGetApi;
