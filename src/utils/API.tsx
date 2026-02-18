export const BASE_URL = "https://orbia-bank-api.onrender.com/";

/* Login usuário */
export const LOGIN_GET = (email: string, senha: string) => ({
  url: `${BASE_URL}usuarios?email=${email}&senha=${senha}`,
  options: { method: "GET" },
});

/* USUÁRIO GET PRODUTOS */
export const PRODUTOS_GET = (usuarioId: number) => ({
  url: `${BASE_URL}produtos?usuarioId=${usuarioId}`,
  options: { method: "GET" },
});

/* GET PRODUTOS POR ID*/
export const PRODUTO_GET = (id: number) => ({
  url: `${BASE_URL}produtos/${id}`,
  options: { method: "GET" },
});

/* ATUALIZA STATUS PRODUTOS*/
export const PRODUTO_UPDATE_STATUS = (
  id: number,
  status: "ativo" | "inativo"
) => ({
  url: `${BASE_URL}produtos/${id}`,
  options: {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  },
});

/* GET TRANSAÇÕES */
export const TRANSACOES_GET = (usuarioId: number) => ({
  url: `${BASE_URL}transacoes?usuarioId=${usuarioId}`,
  options: { method: "GET" },
});
