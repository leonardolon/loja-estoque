import React from "react";
import { render, screen } from "@testing-library/react";
import ConsultItem from "./ConsultItem";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("ConsultItem Page", () => {
  it("should render search input", () => {
    render(<ConsultItem />);
    const input = screen.getByPlaceholderText(/Pesquisar item.../i);
    expect(input).toBeInTheDocument();
  });

  it("should render table headers", () => {
    render(<ConsultItem />);
    expect(screen.getByText(/ID/i)).toBeInTheDocument();
    expect(screen.getByText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Quantidade/i)).toBeInTheDocument();
    expect(screen.getByText(/Ações/i)).toBeInTheDocument();
  });
});
