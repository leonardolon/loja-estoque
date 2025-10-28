import styled from "styled-components";

export const AddItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 60px);
  background-color: #f5f5f5;
  padding-top: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #1976d2;
  }
`;

export const Button = styled.button`
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #135ba1;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: #d32f2f;
  text-align: center;
  margin-top: 0.8rem;
`;

export const SuccessMessage = styled.p`
  color: #2e7d32;
  text-align: center;
  margin-top: 0.8rem;
`;

export const TableContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  text-align: center;

  h3 {
    margin-bottom: 1rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.8rem;
    text-align: center;
  }

  th {
    background-color: #1976d2;
    color: white;
  }
`;
