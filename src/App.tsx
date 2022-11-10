import styled from 'styled-components';
import Search from './components/Search';

function App() {
  return (
    <Container>
      <Search />
    </Container>
  );
}

export default App;

const Container = styled.main`
  background-color: #74b9ff;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
