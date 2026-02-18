import React from "react";
import { useProdutos } from "../../hooks/useProdutos";
import StatusBadge from "../../components/StatusBadge";
import type { Produto } from "../../types/types";
import Breadcrumbs from "../../components/Breadcrumbs";

const categoriaLabels: Record<string, string> = {
  cartao: "Cartões",
  investimento: "Investimentos",
  financiamento: "Financiamentos",
  emprestimo: "Empréstimos",
  poupanca: "Poupança"
};

const categoriaIcones: Record<string, string> = {
  cartao: "💳",
  investimento: "📈",
  financiamento: "🏠",
  emprestimo: "💰",
  poupanca: "🏦"
};

const Produtos = () => {
  const { produtos, loading, alterarStatus } = useProdutos();

  const [busca, setBusca] = React.useState("");
  const [filtroStatus, setFiltroStatus] =
    React.useState<"todos" | "ativo" | "inativo">("todos");
  const [filtroCategoria, setFiltroCategoria] =
    React.useState<string>("todas");

  const [produtoSelecionado, setProdutoSelecionado] = React.useState<Produto | null>(null);
  const limparFiltros = () => {
    setBusca("");
    setFiltroStatus("todos");
    setFiltroCategoria("todas");
  };

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

  if (loading) return <div>Carregando produtos...</div>;

  return (
    <div className="produtos-page">
      <h1>Meus Produtos</h1>
      <Breadcrumbs />

      <div className="filtros flex">
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={busca}
          onChange={({currentTarget}) => setBusca(currentTarget.value)}
        />

          <select
            value={filtroStatus}
            onChange={({currentTarget}) =>
              setFiltroStatus(
                currentTarget.value as "todos" | "ativo" | "inativo"
              )
            }
          >
            <option value="todos">Todos Status</option>
            <option value="ativo">Ativos</option>
            <option value="inativo">Inativos</option>
          </select>

          <select
            value={filtroCategoria}
            onChange={({currentTarget}) =>
              setFiltroCategoria(currentTarget.value)
            }
          >
            <option value="todas">Todas Categorias</option>
            {Object.entries(categoriaLabels).map(
              ([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              )
            )}
          </select>

          <button
            className="btn-limpar"
            onClick={limparFiltros}
          >
            Limpar Filtros
          </button>
      </div>

      <div className="categoria-bloco__grid flex-column">
        {Object.entries(produtosAgrupados).map(
          ([categoria, lista]) => (
            <div key={categoria} className="categoria-bloco">
              <h2 className="grid">
                {categoriaIcones[categoria]}{" "}
                {categoriaLabels[categoria]}
              </h2>

              <div className="produtos-grid">
                {lista.map((produto) => {
                  const ultimos4 = produto.numero_cartao
                    ? produto.numero_cartao.slice(-4)
                    : null;

                  return (
                    <div
                      key={produto.id}
                      className={`produto-card ${categoria}`}
                    >
                      <div className="produto-header">
                        <h3>{produto.nome}</h3>
                        <StatusBadge status={produto.status}/>
                        {ultimos4 && (<p>**** **** {ultimos4}</p>)}
                      </div>

                      <div className="info-btn-acoes flex-center">
                        <div className="box-info">
                          <p>{produto.tipo}</p>
    
                          {ultimos4 && (<p>**** {ultimos4}</p>)}
                        </div>
  
                        <div className="produto-actions">
                          <button onClick={() => alterarStatus(produto.id, produto.status) }>
                            {produto.status === "ativo"
                              ? "Desativar"
                              : "Ativar"}
                          </button>
  
                          <button className="btn-detalhes" onClick={() => setProdutoSelecionado(produto)}>
                            Ver Detalhes
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        )}
      </div>

      {produtoSelecionado && (
        <div className="modal-overlay flex-center">
          <div className="modal-lateral">
            <div className="header-modal flex-center">
              <h2>
                {produtoSelecionado.nome}
              </h2>

              <button
                className="fechar"
                onClick={() =>
                  setProdutoSelecionado(null)
                }
              >
                X
              </button>
            </div>

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
                <strong>Taxa:</strong>{" "}
                {produtoSelecionado.taxa_juros}%
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Produtos;
