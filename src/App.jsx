
import './App.css';
import SongInput from './components/SongInput';
import SongList from './components/SongList';
import styled from '@emotion/styled';


function App() {
const Header = styled.h3`
  text-align: center;
  width:65%;
  margin:30px 0;
`;
const Div = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
`;
  return (
    <>
      <Div>
        <Header>Let's add the song and enjoy it</Header>
        <SongInput />
        <SongList />
      </Div>
    </>
  );
}

export default App;
