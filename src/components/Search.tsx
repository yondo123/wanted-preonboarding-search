import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import useDebounce from '../hooks/useDebounce';
import { keywordState } from '../atom';
import SearchRecommend from './SearchRecommend';

function Search() {
  const setKeyword = useSetRecoilState(keywordState);
  const handleChange = useDebounce((value) => {
    setKeyword(value);
  }, 300);

  return (
    <SearchWrap>
      <SearchTab>
        <input type="text" id="search-tab" onChange={handleChange} />
        <SearchButton>검 색</SearchButton>
      </SearchTab>
      <SearchRecommend />
    </SearchWrap>
  );
}

export default Search;

const SearchWrap = styled.div`
  font-size: 16px;
  position: relative;
`;

const SearchTab = styled.div`
  display: flex;

  & input {
    width: 512px;
    height: 48px;
    background-color: #fff;
    padding: 8px;
    border-radius: 10px 0px 0px 10px;
  }
`;

const SearchButton = styled.button`
  width: 64px;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  background-color: #0984e3;
  border-radius: 0 10px 10px 0;
`;
