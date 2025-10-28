import styled from "styled-components";

export const ConsultItemContainer = styled.div`
  padding: 2rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  width: 300px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th,
  td {
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
  }

  td {
    background-color: #fff;
  }

  button {
    margin-right: 0.5rem;
  }
`;

export const StatusLabel = styled.span<{ status: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  color: #fff;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  padding: 1rem;
`;

export const ModalHeader = styled.div`
  margin-bottom: 1rem;

  h3 {
    margin: 0;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
