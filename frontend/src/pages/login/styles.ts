import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.8rem;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 0.8rem;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #9e9e9e;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;
