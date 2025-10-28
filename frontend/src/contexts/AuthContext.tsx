import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import api from "../api/api";

interface LoginData {
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (data: LoginData) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  const login = async ({ email, password }: LoginData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.access_token);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err.response?.data || err.message);
      setError("Credenciais inválidas ou erro no servidor");
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, error, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
