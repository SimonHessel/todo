import { User } from "firebase";
import React, { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
type InitialStateType = {
  user: User | undefined;
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
};

const initialState: InitialStateType = {
  user: undefined,
  auth,
  db,
};

const FirebaseContext = createContext<InitialStateType>(initialState);
const FirebaseProvider: React.FC = ({ children }) => {
  const [user] = useAuthState(auth);

  return (
    <FirebaseContext.Provider value={{ user, db, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, FirebaseContext };
