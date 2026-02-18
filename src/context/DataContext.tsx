import React from "react";
import useFetch from "../hooks/useFetch";
import { LOGIN_GET } from "../utils/API";
import type { IDataContext, Usuario, Vendas } from "../types/types";

const DataContext = React.createContext<IDataContext | null>(null);

export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (context === null)
    throw new Error("useDataContext precisa estar dentro do DataContextProvider");
  return context;
};

const getDate = (n: number) => {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};

export const DataContextProvider = ({children, }: React.PropsWithChildren) => {
  const [authLoading, setAuthLoading] = React.useState(true);
  const [inicio, setInicio] = React.useState(getDate(14));
  const [final, setFinal] = React.useState(getDate(0));
  const [login, setLogin] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [usuario, setUsuario] = React.useState<Usuario | null>(null);

  const { data, loading, error } = useFetch<Vendas[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );

  const signIn = async () => {
    const { url, options } = LOGIN_GET(login, senha);

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.length === 0) {
      throw new Error("Usuário ou senha inválidos");
    }

    const user = data[0];

    setUsuario(user);
    localStorage.setItem("usuario", JSON.stringify(user));
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  React.useEffect(() => {
    const storedUser = localStorage.getItem("usuario");

    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }

    setAuthLoading(false);
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,

        usuario,
        signIn,
        logout,
        authLoading,

        login,
        setLogin,
        senha,
        setSenha,

        inicio,
        setInicio,
        final,
        setFinal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
