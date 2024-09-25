import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("unknown action!");
  }
}

const FAKE_USER = {
  name: "Niloofar",
  email: "user@gmail.com",
  password: "1234",
};

export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispath] = useReducer(
    authReducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispath({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispath({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
