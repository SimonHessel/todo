import React, { useContext } from "react";
import {
  Button,
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import firebase from "firebase";
import { FirebaseContext } from "../context/FirebaseProvider";

interface LoginProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "80vh",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "column",
    },
  })
);

export const Login: React.FC<LoginProps> = ({}) => {
  const classes = useStyles();
  const { auth } = useContext(FirebaseContext);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <Container>
      <div className={classes.root}>
        <Typography variant="h1">Welcome to Todo</Typography>
        <Button onClick={signInWithGoogle} variant="contained" color="primary">
          Sign in with Google
        </Button>
      </div>
    </Container>
  );
};
