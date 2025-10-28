import React, { useState } from "react";
import { AddItemContainer, Form, Input, Button } from "../addItem/styles";
import Header from "../../components/Header/Header";

const AddItem: React.FC = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("Usuário não autenticado. Faça login novamente.");
        return;
      }

      const response = await fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          quantity,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Erro ao cadastrar item");
      }

      setMessage("Item cadastrado com sucesso!");
      setName("");
      setQuantity(1);
    } catch (error: any) {
      setMessage(`Erro ao cadastrar o item: ${error.message}`);
    }
  };

  return (
    <>
      <Header activeTab="add" setActiveTab={() => {}} />
      <AddItemContainer>
        <Form onSubmit={handleSubmit}>
          <h2>Cadastrar Novo Item</h2>
          <Input
            placeholder="Nome do item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Quantidade"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <Button type="submit">Cadastrar</Button>
          {message && <p>{message}</p>}
        </Form>
      </AddItemContainer>
    </>
  );
};

export default AddItem;
