import { render, screen } from "@testing-library/react";
import StatusBadge from "./StatusBadge";

describe("StatusBadge", () => {
  test("exibe 'Ativo' e classe badge-ativo quando status é ativo", () => {
    render(<StatusBadge status="ativo" />);

    const badge = screen.getByText("Ativo");
    expect(badge).toBeInTheDocument();
    expect(badge.closest(".status-badge")).toHaveClass("badge-ativo");
  });

  test("exibe 'Inativo' e classe badge-inativo quando status é inativo", () => {
    render(<StatusBadge status="inativo" />);

    const badge = screen.getByText("Inativo");
    expect(badge).toBeInTheDocument();
    expect(badge.closest(".status-badge")).toHaveClass("badge-inativo");
  });
});
