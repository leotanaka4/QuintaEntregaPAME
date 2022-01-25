import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Informacoes from './Components/Informacoes';
import Suporte from './Components/Suporte';
import { Page } from './styles';

function App() {
  return (
    <Page>
      <Header/>
      <Informacoes/>
    </Page>
  );
}

export default App;
