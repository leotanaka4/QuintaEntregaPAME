import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Suporte from './Components/Suporte';
import { Page } from './styles';

function App() {
  return (
    <Page>
      <Header/>
      <Suporte/>
    </Page>
  );
}

export default App;
