import routes from './router';
import { useRoutes } from "react-router-dom";
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme';

function App() {
  const content = useRoutes(routes);
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
    </>
  );
}

export default App;