import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {authorization} from "../../../services";
import {FormHelperText} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignIn = ({setErrorMessage, errorMessage, handleChangeAuth}: any) => {

  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();

  const classes = useStyles();

  useEffect(()=>{
    return function () {
      setErrorMessage('');
    }
  }, [])

    const handleSignIn = async (e: any) => {
    e.preventDefault();
    if(login && password){
      try{
        const { data: { tokens } } = await authorization.signIn({login, password});
        localStorage.setItem('access_token', tokens.access_token);
        localStorage.setItem('refresh_token', tokens.refresh_token);
        window.location.href = '/profile';
      } catch (e){
        setErrorMessage(e.response.data.text);
      }
    } else {
      setErrorMessage('Enter all fields');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/*<LockOutlinedIcon />*/}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSignIn}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Login"
            label="Email or phone"
            name="email"
            autoComplete="email"
            autoFocus
            value={login}
            onChange={ e => setLogin(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={ e => setPassword(e.target.value)}
          />
          <Grid item xs={12} container justify="center">
            <FormHelperText
              error={true}
            >
              {errorMessage}
            </FormHelperText>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Button color="primary" onClick={handleChangeAuth}>Don't have an account? Sign Up</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
