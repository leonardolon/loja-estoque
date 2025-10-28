import React from "react";
import Header from "../../components/Header/Header";
import {
  DashboardContainer,
  ContentArea,
  UserCard,
  UserPhoto,
  UserName,
} from "../dashboard/styles";

const Dashboard: React.FC = () => {
  const userName = "Vendedor Exemplo";
  const userPhoto = "";

  return (
    <DashboardContainer>
      <Header activeTab="dashboard" setActiveTab={() => {}} />

      <ContentArea>
        <UserCard>
          <UserPhoto src={userPhoto || "https://via.placeholder.com/100"} />
          <UserName>{userName}</UserName>
        </UserCard>
      </ContentArea>
    </DashboardContainer>
  );
};

export default Dashboard;
