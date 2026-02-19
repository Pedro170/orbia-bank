// import React from "react";
import { useDataContext } from "../../context/DataContext";
import type { Transacao } from "../../types/types";
import useFetch from "../../hooks/useFetch";
import { TRANSACOES_GET } from "../../utils/API";
import Loading from "../../components/Loading";

const formatDatePtBR = (dateString: string): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) return "";

  const day = date.getDate();
  const month = date.toLocaleString("pt-BR", { month: "long" });

  return `${day} de ${month}`;
};

const Dashboard = () => {
  const { usuario } = useDataContext();

  // ==============================
  // PRODUTOS
  // ==============================
  // const produtosRequest = usuario ? PRODUTOS_GET(usuario.id) : null;

  // const {
  //   data: produtos,
  //   loading: loadingProdutos,
  //   error: errorProdutos,
  // } = useFetch<Produto[]>(
  //   produtosRequest?.url ?? "",
  //   produtosRequest?.options
  // );

  const transacoesRequest = usuario ? TRANSACOES_GET(usuario.id) : null;

  const {
    data: transacoes,
    loading: loadingTransacoes,
    error: errorTransacoes,
  } = useFetch<Transacao[]>(
    transacoesRequest?.url ?? "",
    transacoesRequest?.options
  );

  return (
    <div className="dashboard-container">
      <h1>Olá, {usuario?.nome}</h1>

      <div className="saldo-card">
        <h2>Saldo em Conta</h2>
        <p className="saldo">
          {usuario?.saldo.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <div className="transacoes">
        <h2>Transações Recentes</h2>

        {loadingTransacoes && <Loading />}
        {errorTransacoes && <p>Erro: {errorTransacoes}</p>}

        <ul>
          {transacoes?.map((t) => (
            <li key={t.id} className="transacao-item flex-center">
              <div className="box-icone-texto grid-center">
                <span className="box-icone"></span>
                <div className="box-texto">
                  <h3>{t.descricao}</h3>
                  <span>{formatDatePtBR(t.data)}</span>
                </div>
              </div>

              <strong style={{color: t.tipo === "entrada" ? "green" : "red",}}>
                {t.tipo === "entrada" ? "+" : "-"}{" "}
                {t.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
