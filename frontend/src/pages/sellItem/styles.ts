import styled from "styled-components";

export const SellItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #ccc;
  width: 300px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
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
