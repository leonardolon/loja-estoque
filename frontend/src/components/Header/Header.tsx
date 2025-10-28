import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, Tab } from "../Header/styles";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleTabClick = (tab: string, path: string) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <HeaderContainer>
      <Tab
        active={activeTab === "dashboard"}
        onClick={() => handleTabClick("dashboard", "/dashboard")}
      >
        Dashboard
      </Tab>
      <Tab
        active={activeTab === "add"}
        onClick={() => handleTabClick("add", "/add-item")}
      >
        Cadastrar Item
      </Tab>
      <Tab
        active={activeTab === "sell"}
        onClick={() => handleTabClick("sell", "/sell-item")}
      >
        Registrar Venda
      </Tab>
      <Tab
        active={activeTab === "consult"}
        onClick={() => handleTabClick("consult", "/consult-item")}
      >
        Consultar Item
      </Tab>
    </HeaderContainer>
  );
};

export default Header;
