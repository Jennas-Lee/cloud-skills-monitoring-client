import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import axios from 'axios';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { authenticatedProps } from '../middlewares/props';

type dataObjectType = {
  [index: string]: string;
  name: string;
  company: string;
  email: string;
  password: string;
  confirm_password: string;
}

const defaultData: dataObjectType = {
  "name": "",
  "company": "",
  "email": "",
  "password": "",
  "confirm_password": ""
}

const SignUp = (props: authenticatedProps) => {
  const [data, setData] = useState<dataObjectType>(defaultData);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!loading) {
      setLoading(true);

      axios({
        method: 'POST',
        url: process.env.REACT_APP_API_HOST + '/api/auth/signup',
        data: {
          name: data.get('name'),
          company: data.get('company'),
          email: data.get('email'),
          password: data.get('password'),
          confirm_password: data.get('confirm-password'),
        },
      })
        .then((response) => {
          setOpen(true);
        })
        .catch((error) => {
          if (error.response.status === 400) {
            setData(error.response.data);
          } else {
            alert('????????? ??????????????????.');
            console.error(error);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const onFocusHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let update_data = data;

    update_data[event.target.name] = defaultData[event.target.name];
    setData({ ...update_data });
  }

  if (props.authenticated) {
    return (
      <Container component="main" maxWidth="md" sx={{ mt: 2 }}>
        <CssBaseline/>
        <Alert variant="outlined" severity="error">
          <AlertTitle>?????? ??????????????? ????????????.</AlertTitle>
          ???????????? ??? ??????????????? ???????????????. <Link href="/auth/signout" underline="none">??????????????????</Link>
        </Alert>
      </Container>
    );
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmitHandler} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  error={data.name !== defaultData.name}
                  helperText={data.name}
                  onChange={onFocusHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="company"
                  label="Company"
                  name="company"
                  autoComplete="company"
                  error={data.company !== defaultData.company}
                  helperText={data.company === "" ? "?????? ???????????? ???????????? ?????????????????? ????????????." : data.company}
                  onChange={onFocusHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={data.email !== defaultData.email}
                  helperText={data.email === "" ? "????????? ?????? ???????????? ?????????????????? ????????????." : data.email}
                  onChange={onFocusHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  error={data.password !== defaultData.password}
                  helperText={data.password === "" ? "????????? ??????, ??????????????? ????????? 8~20?????? ?????????????????? ????????????." : data.password}
                  onChange={onFocusHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  autoComplete="confirm-password"
                  error={data.confirm_password !== defaultData.confirm_password}
                  helperText={data.confirm_password}
                  onChange={onFocusHandler}
                />
              </Grid>
            </Grid>
            <Box sx={{ position: 'relative' }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                SIGN UP
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-8px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  to="/signin"
                  component={RouterLink}
                  variant="body2"
                  aria-current="page"
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            ???????????? ??????
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              ???????????? ?????? ??? ?????????????????????. ???????????? ???????????? ????????? ????????? ??? ????????????.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus>
              <Link
                to="/"
                component={RouterLink}
                variant="inherit"
                underline={'none'}
                aria-current="page"
              >
                ??????
              </Link>
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    );
  }
}

export default SignUp;