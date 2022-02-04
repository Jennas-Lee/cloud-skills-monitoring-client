import React from 'react';

import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const Error404 = () => {
  return (
    <Container maxWidth="lg">
      <CssBaseline/>
      <Alert
        sx={{ mt: 2 }}
        variant="outlined"
        severity="error"
      >
        찾을 수 없는 페이지입니다.
      </Alert>
    </Container>
  );
}

export default Error404;
