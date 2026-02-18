import { Link, useLocation } from "react-router-dom";
import type { Categoria } from "../types/types";

const categoriasConfig: Record<Categoria, string> = {
  cartao: "Cartões",
  investimento: "Investimentos",
  financiamento: "Financiamentos",
  emprestimo: "Empréstimos",
  poupanca: "Poupança"
};

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav className="breadcrumb">
      {pathnames.map((value, index) => {
        const isLast =
          index === pathnames.length - 1;

        const to =
          "/" +
          pathnames.slice(0, index + 1).join("/");

        let label = value;

        if (value === "dashboard") {
          label = "Dashboard";
        }

        if (value === "categorias") {
          label = "categorias";
        }

        if (categoriasConfig[value as Categoria]) {
          label =
            categoriasConfig[value as Categoria];
        }

        return isLast ? (
          <span key={to}>{label}</span>
        ) : (
          <span key={to}>
            <Link to={to}>{label}</Link>
            {" / "}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
