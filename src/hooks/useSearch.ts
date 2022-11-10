import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import fetchData from '../api/cache';
import { keywordState } from '../atom';
import { SearchType } from '../types';

const useSearch = () => {
  const keyword = useRecoilValue(keywordState);
  const [searchResult, setSearchResult] = useState<SearchType[]>();
  useEffect(() => {
    if (keyword) {
      fetchData(keyword).then((res) => setSearchResult(res));
    } else {
      setSearchResult([]);
    }
  }, [keyword]);

  return { keyword, searchResult };
};

export default useSearch;
