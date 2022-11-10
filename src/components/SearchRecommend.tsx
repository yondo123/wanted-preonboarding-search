import styled from 'styled-components';
import reactStringReplace from 'react-string-replace';
import useSearch from '../hooks/useSearch';

function SearchRecommend() {
  const { searchResult, keyword } = useSearch();

  return (
    <RecommendList>
      {searchResult?.map((item: { sickCd: string; sickNm: string }) => (
        <RecommendItem key={item.sickCd}>
          {reactStringReplace(item.sickNm, keyword, (match, i) => (
            <span key={i} className="bold">
              {match}
            </span>
          ))}
        </RecommendItem>
      ))}
    </RecommendList>
  );
}

export default SearchRecommend;

const RecommendList = styled.ul`
  position: absolute;
  top: 64px;
  background-color: #fff;
  border-radius: 8px;

  & .bold {
    font-weight: 700;
  }
`;

const RecommendItem = styled.li`
  cursor: pointer;
  padding: 4px 8px;
  width: 510px;
  margin-top: 8px;
`;
