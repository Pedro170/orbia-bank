import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrbiaBankSVG from "../../assets/OrbiaBankSVG";
import cadeado from "../../assets/Home/Icons/acessar.svg";
import Input from "../../components/Input";
import AlertModal from "../../components/AlertModal";
import { useDataContext } from "../../context/DataContext";

const SetaDireita = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Header = () => {
  const { login, setLogin, senha, setSenha, signIn, usuario, logout } =
    useDataContext();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      await signIn();
      navigate("/restrito");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  const handleLogout = () => {
    logout();
    setLogin("");
    setSenha("");
  };

  return (
    <header className="header-principal">
      <div className="flex wrapper">
        <div className="box-logo">
          <OrbiaBankSVG title="Logo Orbia Bank" />
        </div>

        <nav>
          <ul className="flex">
            <li><a href="">Serviços</a></li>
            <li><a href="">Para empresas</a></li>
            <li><a href="">Benefícios</a></li>
            <li><a href="">Preços</a></li>
          </ul>
        </nav>

        <div className="btn-acessos grid-center">

          {usuario ? (
            <div className="flex-center">
              <span style={{ marginRight: "12px" }}>
                Olá, {usuario.nome}
              </span>
              <button onClick={handleLogout}>Sair</button>
            </div>
          ) : (
            <>
              <div className="login-senha-acessar grid-center">
                <form className="form-login-senha grid-center">
                  <Input
                    classLabel="sr-only"
                    label="Login"
                    id="login"
                    name="login"
                    placeholder="Login"
                    value={login}
                    onChange={({ currentTarget }) =>
                      setLogin(currentTarget.value)
                    }
                  />

                  <Input
                    classLabel="sr-only"
                    label="Senha"
                    id="senha"
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={({ currentTarget }) =>
                      setSenha(currentTarget.value)
                    }
                  />
                </form>

                <button
                  onClick={handleSubmit}
                  className="acessar flex-center"
                  type="button"
                  aria-label={login.trim() && senha.trim() ? "Entrar" : "Acessar"}
                >
                  {login.trim() && senha.trim() ? (
                    <SetaDireita />
                  ) : (
                    <img src={cadeado} alt="" />
                  )}
                </button>
              </div>

              <a href="" className="criar-conta">
                Criar Conta
              </a>
            </>
          )}
        </div>
      </div>

      <AlertModal
        isOpen={errorMessage !== null}
        onClose={() => setErrorMessage(null)}
        message={errorMessage ?? ""}
        variant="error"
      />
    </header>
  );
};

export default Header;
