import requestGetApi from './index';
import { CacheType, SearchType } from '../types';

const store: CacheType = {};

const removeCache = (key: string) => {
  console.log('[REMOVE]', `π« ${key} λ°μ΄ν°λ₯Ό μ­μ ν©λλ€.`);
  if (Object.prototype.hasOwnProperty.call(store, key)) {
    delete store[key];
  }
};

const fetchData = async (key: string): Promise<SearchType[]> => {
  const currentTime = new Date();
  if (store[key]) {
    if (+currentTime - +store[key].time < 10000) {
      console.log('[CACHED]', 'π μΊμλ λ°μ΄ν° μλλ€.');
      return store[key].value;
    }

    delete store[key];
  }
  const { data } = await requestGetApi(key);

  store[key] = { time: currentTime, value: data };

  setTimeout(() => {
    removeCache(key);
  }, 10000);

  return store[key].value;
};

export default fetchData;
