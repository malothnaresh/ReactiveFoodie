import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ddd",
    padding: "2rem",
    borderRadius: "0.25rem",
    boxShadow: "0 6px 10px -4px rgba(0,0,0,0.3)"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [validators, setValidators] = useState({
    name: false,
    phone: false,
    password: false,
    confirmPass: false
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPass: ""
  });

  const signup = () => {
    setValidators({
      name: formData.name === "",
      phone: formData.phone === "",
      password: formData.password === "",
      confirmPass:
        formData.confirmPass === "" ||
        formData.confirmPass !== formData.password
    });

    if (
      validators.name ||
      validators.phone ||
      validators.password ||
      validators.confirmPass
    ) {
      return;
    }
    props.history.push("/signin");
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography>Create an account</Typography>
        <form className={classes.form} noValidate>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            error={validators.name}
            helperText={validators.name ? "Name is required" : " "}
            onChange={event =>
              setFormData({ ...formData, name: event.target.value })
            }
            autoFocus
          />
          <TextField
            margin="normal"
            id="phone"
            fullWidth
            label="Phone"
            error={validators.phone}
            helperText={validators.phone ? "Phone number is required" : " "}
            onChange={event =>
              setFormData({ ...formData, phone: event.target.value })
            }
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            error={validators.password}
            helperText={validators.password ? "Password is required" : " "}
            onChange={event =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
          <TextField
            margin="normal"
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="confirmPassword"
            id="confirmPassword"
            error={validators.confirmPass}
            helperText={
              validators.confirmPass ? "Passwords does not match" : " "
            }
            onChange={event =>
              setFormData({ ...formData, confirmPass: event.target.value })
            }
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => signup()}
          >
            Register
          </Button>
          <Grid container>
            <Grid item xs>
              By creating an account, I accept the
              <Link href="/terms-and-conditions" variant="body2">
                &nbsp;Terms & Conditions
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs className="mt-1">
              Already have an account
              <Link href="/signin" variant="body2">
                &nbsp;Signin
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
