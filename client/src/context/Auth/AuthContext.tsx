import { createContext } from "react";

export interface AuthContextTypes {
  user: string | null;
  token: string | null;
  login: (name: string, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextTypes>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
