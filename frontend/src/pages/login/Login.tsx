import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import {
  LoginContainer,
  Form,
  Input,
  Button,
  ErrorMessage,
} from "../login/styles";

const Login: React.FC = () => {
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Login"}
        </Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </LoginContainer>
  );
};

export default Login;
