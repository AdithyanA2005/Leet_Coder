import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext, { AuthContextTypes } from "./AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
};

export default function AuthProvider(props: AuthProviderProps) {
  // To navigate to different pages
  const navigate = useNavigate();

  // State variables to store users name and auth token
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Fetch and store users name and token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    const storedUser = localStorage.getItem("userName");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    };
  }, []);

  // Function to login and setup name & token states and localStorage
  const login = (name: string, token: string) => {
    // Set state variables
    setUser(name);
    setToken(token);

    // Set localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userToken", token);

    // After successfully logged in show a toast and redirect
    toast.success("Logged in as " + name);
    navigate("/");
  };

  // Function to logout
  const logout = () => {
    // Clear state variables
    setUser(null);
    setToken(null);

    // Clear name and token from localStorage
    localStorage.removeItem("userName");
    localStorage.removeItem("userToken");

    // Show toast after logout
    toast.success("Goodbye, see you soon!");
    navigate("/");
  };

  // Values to be passed to the provider
  const value: AuthContextTypes = {
    user,
    token,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
};

