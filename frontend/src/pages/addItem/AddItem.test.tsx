import React from "react";
import { render, screen } from "@testing-library/react";
import AddItem from "./AddItem";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("AddItem Page", () => {
  it("should render form inputs", () => {
    render(<AddItem />);
    const nameInput = screen.getByPlaceholderText(/Nome do item/i);
    const quantityInput = screen.getByPlaceholderText(/Quantidade/i);
    expect(nameInput).toBeInTheDocument();
    expect(quantityInput).toBeInTheDocument();
  });

  it("should render buttons", () => {
    render(<AddItem />);
    expect(screen.getByText(/Salvar/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancelar/i)).toBeInTheDocument();
  });
});
