import React from "react";
import { useNavigate } from "react-router-dom";
import OrbiaBankSVG from "../../assets/OrbiaBankSVG";
import cadeado from "../../assets/Home/Icons/acessar.svg";
import Input from "../../components/Input";
import { useDataContext } from "../../context/DataContext";

const Header = () => {
  const {login, setLogin, senha, setSenha, signIn, usuario, logout} = useDataContext();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      await signIn();
      navigate("/restrito");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
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
              <button onClick={logout}>Sair</button>
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
                >
                  <img src={cadeado} alt="" />
                </button>
              </div>

              <a href="" className="criar-conta">
                Criar Conta
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
