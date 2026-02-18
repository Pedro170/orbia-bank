import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProdutos } from "../../hooks/useProdutos";
import StatusBadge from "../../components/StatusBadge";
import type { Categoria, Produto } from "../../types/types";
import Breadcrumbs from "../../components/Breadcrumbs";

const categoriasConfig: Record<Categoria, string> = {
  cartao: "Cartões",
  investimento: "Investimentos",
  financiamento: "Financiamentos",
  emprestimo: "Empréstimos",
  poupanca: "Poupança"
};

const CategoriaProdutos = () => {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const { produtos, alterarStatus } = useProdutos();

  const categoriaTipada = categoria as Categoria;

  const [produtoSelecionado, setProdutoSelecionado] =
    React.useState<Produto | null>(null);

  const produtosFiltrados = produtos.filter(
    (p) => p.categoria === categoriaTipada
  );

  return (
    <div className="categoria-page">

      <button
        className="btn-voltar"
        onClick={() => navigate("/dashboard/produtos")}
      >
        ← Voltar para Categorias
      </button>

      <h1>{categoriasConfig[categoriaTipada]}</h1>

      <Breadcrumbs />

      <div className="produtos-grid">
        {produtosFiltrados.map((produto) => (
          <div key={produto.id} className="produto-card">
            <div className="produto-header">
              <h3>{produto.nome}</h3>
              <StatusBadge status={produto.status} />
            </div>

            <p>{produto.tipo}</p>

            {produto.numero_cartao && (
              <p>
                **** **** ****{" "}
                {produto.numero_cartao.slice(-4)}
              </p>
            )}

            <div className="produto-actions">
              <button
                onClick={() =>
                  alterarStatus(
                    produto.id,
                    produto.status
                  )
                }
              >
                {produto.status === "ativo"
                  ? "Desativar"
                  : "Ativar"}
              </button>

              <button
                onClick={() =>
                  setProdutoSelecionado(produto)
                }
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      {produtoSelecionado && (
        <div className="drawer-overlay">
          <div className="drawer">
            <button
              className="close-btn"
              onClick={() =>
                setProdutoSelecionado(null)
              }
            >
              ✕
            </button>

            <h2>{produtoSelecionado.nome}</h2>

            <StatusBadge
              status={produtoSelecionado.status}
            />

            <p>
              <strong>Tipo:</strong>{" "}
              {produtoSelecionado.tipo}
            </p>

            <p>
              <strong>Descrição:</strong>{" "}
              {produtoSelecionado.descricao}
            </p>

            {produtoSelecionado.taxa_juros && (
              <p>
                <strong>Taxa de Juros:</strong>{" "}
                {produtoSelecionado.taxa_juros}%
              </p>
            )}

            {produtoSelecionado.limite && (
              <p>
                <strong>Limite:</strong>{" "}
                R${" "}
                {produtoSelecionado.limite.toLocaleString(
                  "pt-BR"
                )}
              </p>
            )}

            {produtoSelecionado.numero_cartao && (
              <p>
                <strong>Número:</strong>{" "}
                {produtoSelecionado.numero_cartao}
              </p>
            )}

            <p>
              <strong>Criado em:</strong>{" "}
              {new Date(
                produtoSelecionado.data_criacao
              ).toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriaProdutos;
