import React from "react";
import StatusBadge from "./StatusBadge";
import type { Produto } from "../types/types";

type ProdutoCardProps = {
  produto: Produto;
  categoria: string;
  alterarStatus: (
    id: number,
    status: Produto["status"]
  ) => Promise<void>;
  setProdutoSelecionado: React.Dispatch<
    React.SetStateAction<Produto | null>
  >;
};

const ProdutoItem = ({
  produto,
  categoria,
  alterarStatus,
  setProdutoSelecionado,
}: ProdutoCardProps) => {
  const ultimos4 = produto.numero_cartao
    ? produto.numero_cartao.slice(-4)
    : null;

  const handleAlterarStatus = async () => {
    await alterarStatus(produto.id, produto.status);
  };

  return (
    <div className={`produto-card ${categoria}`}>
      <div className="produto-header">
        <h3>{produto.nome}</h3>
        <StatusBadge status={produto.status} />
        {ultimos4 && <p>**** **** {ultimos4}</p>}
      </div>

      <div className="info-btn-acoes flex-center">
        <div className="box-info">
          <p>{produto.tipo}</p>
          {ultimos4 && <p>**** {ultimos4}</p>}
        </div>

        <div className="produto-actions">
          <button onClick={handleAlterarStatus}>
            {produto.status === "ativo"
              ? "Desativar"
              : "Ativar"}
          </button>

          <button
            className="btn-detalhes"
            onClick={() =>
              setProdutoSelecionado(produto)
            }
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdutoItem;
