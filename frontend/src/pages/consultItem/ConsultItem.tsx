import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import api from "../../api/api";
import {
  ConsultItemContainer,
  Table,
  SearchInput,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Select,
} from "../consultItem/styles";

interface Item {
  id: string;
  name: string;
  quantity: number;
  status: "todo" | "doing" | "done";
}

const statusOptions = [
  { value: "todo", label: "Disponível" },
  { value: "doing", label: "Em baixa" },
  { value: "done", label: "Reservado" },
];

const ConsultItem: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("consult");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Item | null>(null);
  const [editName, setEditName] = useState("");
  const [editQuantity, setEditQuantity] = useState(0);
  const [editStatus, setEditStatus] = useState<Item["status"]>("todo");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await api.get("/items", {
        params: { search: searchTerm, page: 1, limit: 50 },
      });

      setItems(response.data.data);
    } catch (error) {
      console.error("Erro ao buscar itens:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/items/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erro ao deletar item:", error);
    }
  };

  const handleEditClick = (item: Item) => {
    setEditItem(item);
    setEditName(item.name);
    setEditQuantity(item.quantity);
    setEditStatus(item.status);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!editItem) return;

    try {
      await api.patch(`/items/${editItem.id}`, {
        name: editName,
        quantity: editQuantity,
        status: editStatus,
      });

      setItems((prev) =>
        prev.map((item) =>
          item.id === editItem.id
            ? {
                ...item,
                name: editName,
                quantity: editQuantity,
                status: editStatus,
              }
            : item
        )
      );
      setIsModalOpen(false);
    } catch (error) {
      console.error("Erro ao atualizar item:", error);
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ConsultItemContainer>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <div style={{ marginTop: "1rem" }}>
        <SearchInput
          type="text"
          placeholder="Pesquisar item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Status</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                {statusOptions.find((s) => s.value === item.status)?.label}
              </td>
              <td>{item.quantity}</td>
              <td>
                <Button onClick={() => handleEditClick(item)}>Editar</Button>
                <Button onClick={() => handleDelete(item.id)}>Deletar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h3>Editar Item</h3>
            </ModalHeader>
            <ModalBody>
              <Input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Nome do item"
              />
              <Input
                type="number"
                value={editQuantity}
                onChange={(e) => setEditQuantity(Number(e.target.value))}
                placeholder="Quantidade"
              />
              <Select
                value={editStatus}
                onChange={(e) =>
                  setEditStatus(e.target.value as Item["status"])
                }
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleSave}>Salvar</Button>
              <Button onClick={() => setIsModalOpen(false)}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </ConsultItemContainer>
  );
};

export default ConsultItem;
