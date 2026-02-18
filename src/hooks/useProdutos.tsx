import React from "react";
import { useDataContext } from "../context/DataContext";
import type { Produto } from "../types/types";
import { PRODUTOS_GET, PRODUTO_UPDATE_STATUS } from "../utils/API";

export const useProdutos = () => {
  const { usuario } = useDataContext();
  const [produtos, setProdutos] = React.useState<Produto[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!usuario) return;

    const fetchProdutos = async () => {
      setLoading(true);

      const { url, options } =
        PRODUTOS_GET(usuario.id);

      const response = await fetch(url, options);
      const data = await response.json();

      setProdutos(data);
      setLoading(false);
    };

    fetchProdutos();
  }, [usuario]);

  const alterarStatus = async (
    id: number,
    status: "ativo" | "inativo"
  ) => {
    const novoStatus =
      status === "ativo" ? "inativo" : "ativo";

    const { url, options } =
      PRODUTO_UPDATE_STATUS(id, novoStatus);

    await fetch(url, options);

    setProdutos((prev) => prev.map((p) => p.id === id ? { ...p, status: novoStatus } : p)
    );
  };

  return { produtos, loading, alterarStatus };
};
