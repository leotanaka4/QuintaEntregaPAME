import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Styles/global';
import { theme } from './Styles/theme';
import { AppRoutes } from './Routes/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
