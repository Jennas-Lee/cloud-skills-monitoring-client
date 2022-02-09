import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cookies } from 'react-cookie';

import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import Account from './components/auth/Account';
import Error404 from './components/layout/Error404';

import { refresh } from './components/middlewares/refresh';

import Navbar from './components/layout/Navbar';
import Main from './components/layout/Main';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

const THEME: Theme = createTheme({
  typography: {
    "fontFamily": `"Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif`
  },
  palette: {
    mode: 'dark',
  }
});

const App = () => {
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);

  useEffect(() => {
    refresh();
    if (new Cookies().get('Authorization')) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [authenticated]);

  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Navbar authenticated={authenticated}/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/auth/signin" element={<SignIn authenticated={authenticated}/>}/>
          <Route path="/auth/signup" element={<SignUp authenticated={authenticated}/>}/>
          <Route path="/auth/account" element={<Account authenticated={authenticated}/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
