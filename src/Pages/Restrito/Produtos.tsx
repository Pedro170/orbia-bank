import React from "react";
import { useProdutos } from "../../hooks/useProdutos";
import type { Produto } from "../../types/types";
import Breadcrumbs from "../../components/Breadcrumbs";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import ProdutoItem from "../../components/ProdutoItem";

const categoriaLabels: Record<string, string> = {
  cartao: "Cartões",
  investimento: "Investimentos",
  financiamento: "Financiamentos",
  emprestimo: "Empréstimos",
  poupanca: "Poupança",
};

const categoriaIcones: Record<string, string> = {
  cartao: "💳",
  investimento: "📈",
  financiamento: "🏠",
  emprestimo: "💰",
  poupanca: "🏦",
};

const Produtos = () => {
  const { produtos, loading, alterarStatus } = useProdutos();

  const [busca, setBusca] = React.useState("");
  const [filtroStatus, setFiltroStatus] =
    React.useState<"todos" | "ativo" | "inativo">("todos");
  const [filtroCategoria, setFiltroCategoria] =
    React.useState<string>("todas");

  const [produtoSelecionado, setProdutoSelecionado] =
    React.useState<Produto | null>(null);

  const produtosFiltrados = produtos
    .filter((produto) => {
      if (filtroStatus === "todos") return true;
      return produto.status === filtroStatus;
    })
    .filter((produto) => {
      if (filtroCategoria === "todas") return true;
      return produto.categoria === filtroCategoria;
    })
    .filter((produto) =>
      produto.nome.toLowerCase().includes(busca.toLowerCase())
    );

  const produtosAgrupados = produtosFiltrados.reduce(
    (acc: Record<string, Produto[]>, produto) => {
      if (!acc[produto.categoria]) {
        acc[produto.categoria] = [];
      }
      acc[produto.categoria].push(produto);
      return acc;
    },
    {}
  );

  if (loading) return <Loading />;

  return (
    <div className="produtos-page">
      <h1>Meus Produtos</h1>
      <Breadcrumbs />

      <div className="filtros flex">
        <div className="filtros-busca">
          <input
            type="text"
            placeholder="Buscar por nome"
            value={busca}
            onChange={({ currentTarget }) => setBusca(currentTarget.value)}
            className="filtros-busca__input"
          />
          {busca.length > 0 && (
            <button
              type="button"
              className="filtros-busca__limpar"
              onClick={() => setBusca("")}
              aria-label="Limpar busca"
            >
              ×
            </button>
          )}
        </div>

        <select value={filtroStatus} onChange={({ currentTarget }) => setFiltroStatus(currentTarget.value as "todos" | "ativo" | "inativo")}>
          <option value="todos">Todos Status</option>
          <option value="ativo">Ativos</option>
          <option value="inativo">Inativos</option>
        </select>

        <select value={filtroCategoria} onChange={({ currentTarget }) => setFiltroCategoria(currentTarget.value)}>
          <option value="todas">Todas Categorias</option>
          {Object.entries(categoriaLabels).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="categoria-bloco__grid flex-column">
        {produtosFiltrados.length === 0 ? (
          <div className="produtos-nenhum-resultado">
            <p className="produtos-nenhum-resultado__mensagem">
              Nenhum produto encontrado.
            </p>
            <p className="produtos-nenhum-resultado__dica">
              Tente ajustar os filtros ou o termo de busca.
            </p>
          </div>
        ) : (
          Object.entries(produtosAgrupados).map(([categoria, lista]) => (
            <div key={categoria} className="categoria-bloco">
              <h2 className="grid">
                {categoriaIcones[categoria]}{" "}
                {categoriaLabels[categoria]}
              </h2>

              <div className="produtos-grid">
                {lista.map((produto) => (
                  <ProdutoItem
                    key={produto.id}
                    produto={produto}
                    categoria={categoria}
                    alterarStatus={alterarStatus}
                    setProdutoSelecionado={setProdutoSelecionado}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <Modal isOpen={!!produtoSelecionado} title={produtoSelecionado?.nome} onClose={() => setProdutoSelecionado(null)}>
        {produtoSelecionado && (
          <>
            <p>
              <strong>Status:</strong>{" "}
              {produtoSelecionado.status}
            </p>

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
                <strong>Taxa:</strong>{" "}
                {produtoSelecionado.taxa_juros}%
              </p>
            )}
          </>
        )}
      </Modal>
    </div>
  );
};

export default Produtos;
