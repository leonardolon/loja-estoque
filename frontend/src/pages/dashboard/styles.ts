import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: #fff;
  margin-bottom: 2rem;
`;

export const UserPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const UserName = styled.h2`
  font-size: 1.2rem;
`;
