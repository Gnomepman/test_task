import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '@/pageProviders/Dashboard';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />} path="/" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
