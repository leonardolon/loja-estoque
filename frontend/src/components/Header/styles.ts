import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 2rem;
  background-color: #1976d2;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Tab = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? "white" : "transparent")};
  color: ${({ active }) => (active ? "#1976d2" : "white")};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${({ active }) => (active ? "white" : "#1565c0")};
  }
`;
