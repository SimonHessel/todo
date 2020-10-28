import { User } from "firebase";
import React, { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
type InitialStateType = {
  userProps: {
    user: User | undefined;
    loading: boolean;
  };
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
};

const initialState: InitialStateType = {
  userProps: {
    user: undefined,
    loading: true,
  },
  auth,
  db,
};

const FirebaseContext = createContext<InitialStateType>(initialState);
const FirebaseProvider: React.FC = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  return (
    <FirebaseContext.Provider
      value={{ userProps: { user, loading }, db, auth }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, FirebaseContext };
