import dashboard from "../../assets/restrito/icons/sidenav/dashboard.svg";
import produtos from "../../assets/restrito/icons/sidenav/produtos.svg";
import investimento from "../../assets/restrito/icons/sidenav/investimentos.svg";
import transferencia from "../../assets/restrito/icons/sidenav/transferencias.svg";
import pagamento from "../../assets/restrito/icons/sidenav/pagamentos.svg";
import notificacoes from "../../assets/restrito/icons/sidenav/notificacoes.svg";
import lupa from "../../assets/restrito/icons/search.svg";
import sair from "../../assets/restrito/icons/sidenav/sair.svg";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/DataContext";
import logo from "../../assets/favicion.svg";

const PrivateLayout = () => {
  const { usuario, logout } = useDataContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="home-logado-section">
      <div className="home-logado container">
        <aside className="sidebar flex-column flex-center">
          <div className="box-logo grid-center">
            <img src={logo} alt="Logo da Orbia Bank" />
            <h2>Orbia Bank</h2>
          </div>

          <nav className="home-logado-navegacao">
            <ul className="flex-column">
              <li>
                <NavLink className={({ isActive }) => isActive ? "grid-center active" : "grid-center"} to="/dashboard" end>
                  <div className="box-icone">
                    <img src={dashboard} alt="" />
                  </div>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "grid-center active" : "grid-center"} to="/dashboard/produtos" end>
                  <div className="box-icone">
                    <img src={produtos} alt="" />
                  </div>
                  <span>Produtos</span>
                </NavLink>
              </li>

              <li>
                <a className="grid-center">
                  <div className="box-icone">
                    <img src={investimento} alt="" />
                  </div>
                  <span>Investimentos</span>
                </a>
              </li>

              <li>
                <a className="grid-center">
                  <div className="box-icone">
                    <img src={transferencia} alt="" />
                  </div>
                  <span>Extrato</span>
                </a>
              </li>

              <li>
                <a className="grid-center">
                  <div className="box-icone">
                    <img src={pagamento} alt="" />
                  </div>
                  <span>Pagamentos</span>
                </a>
              </li>

              <li className="item notificacoes">
                <a className="grid-center">
                  <div className="box-icone">
                    <img src={notificacoes} alt="" />
                  </div>
                  <span>Notificações</span>
                </a>
              </li>

              <li className="item sair">
                <button onClick={handleLogout} className="grid-center">
                  <div className="box-icone">
                    <img src={sair} alt="" />
                  </div>
                  <span>Sair</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="conteudo-principal" style={{ minHeight: "calc(100vh - 40px)" }}>
          <header className="top-bar flex-center">
            <button onClick={handleLogout} className="btn-sair-mobile">
              Sair
            </button>
            <div className="box-perfil grid-center">
              <div className="box-notificacao">
                <img src={notificacoes} alt="notificações" />
              </div>
              <span className="box-nome flex-center" title={usuario?.nome}>
                {usuario?.nome.charAt(0)}
              </span>
            </div>
          </header>

          <section className="content">
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
