import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { SellItemContainer, Form, Input, Button } from "../sellItem/styles";
import api from "../../api/api";

const SellItem: React.FC = () => {
  const [activeTab, setActiveTab] = useState("sell");
  const [itemId, setItemId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!itemId || quantity <= 0) {
      setError("Preencha o ID e uma quantidade válida.");
      return;
    }

    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await api.post(`/items/sell/${itemId}`, {
        quantity,
      });

      setMessage(response.data.message || "Venda registrada com sucesso!");
      setItemId("");
      setQuantity(1);
    } catch (err: any) {
      console.error(err.response?.data || err.message);
      setError(
        err.response?.data?.message ||
          "Erro ao registrar a venda. Verifique o ID e o estoque."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <SellItemContainer>
        <Form onSubmit={handleSubmit}>
          <h2>Registrar Venda</h2>

          <Input
            placeholder="ID do item"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
          />

          <Input
            type="number"
            placeholder="Quantidade"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Processando..." : "Vender"}
          </Button>

          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Form>
      </SellItemContainer>
    </>
  );
};

export default SellItem;
