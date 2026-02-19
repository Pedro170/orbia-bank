export type Usuario = {
  id: number;
  nome: string;
  email: string;
  saldo: number;
};

export type Produto = {
  id: number;
  nome: string;
  tipo: string;
  categoria: "cartao" | "investimento";
  descricao: string;
  status: "ativo" | "inativo";
  numero_cartao: string | null;
  limite: number | null;
  taxa_juros: number | null;
  data_criacao: string;
  usuarioId: number;
};

export type Transacao = {
  id: number;
  descricao: string;
  valor: number;
  tipo: "entrada" | "saida";
  data: string;
  usuarioId: number;
};

export type IDataContext = {
  loading: boolean;
  error: string | null;

  usuario: Usuario | null;
  signIn: () => Promise<void>;
  logout: () => void;

  inicio: string;
  final: string;
  login: string;
  senha: string;
  authLoading: boolean;

  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
  setLogin: React.Dispatch<React.SetStateAction<string>>;
  setSenha: React.Dispatch<React.SetStateAction<string>>;
};

export type Categoria =
  | "cartao"
  | "investimento"
  | "financiamento"
  | "emprestimo"
  | "poupanca";
