import logo from "../../assets/favicion.svg";
import solidez from "../../assets/Home/Icons/solidez.svg";
import tecnologia from "../../assets/Home/Icons/tecnologia.svg";
import beneficios from "../../assets/Home/Icons/beneficio.svg";
import bannerSobre from "../../assets/Home/banner-sobre.jpg";

const Sobre = () => {
  return (
    <section className="home-sobre-section">
      <div className="home-sobre wrapper">
        <div className="home-sobre__grid grid-center">
          <div className="home-sobre__grid-item textos-institucionais">
            <div className="box-texto-intro">
              <h2>Sobre a Orbia Bank</h2>
              <p>Inovação financeira a seu alcance</p>
            </div>

            <ul className="flex-column">
              <li className="grid-center">
                <img src={solidez} alt="Escudo" />
                <div className="box-texto">
                  <h3>Solidez e Credibilidade</h3>
                  <p>
                    Uma instituição financeira digital segura, moderna e
                    confiável, construída sobre pilares sólidos e inovadores.
                  </p>
                </div>
              </li>
              <li className="grid-center">
                <img src={tecnologia} alt="Escudo" />
                <div className="box-texto">
                  <h3>Tecnologia e Inovação</h3>
                  <p>
                    Implementamos soluções tecnológicas avançadas para
                    proporcionar uma experiência bancária ágil, eficiente
                    digital.
                  </p>
                </div>
              </li>
              <li className="grid-center">
                <img src={beneficios} alt="Escudo" />
                <div className="box-texto">
                  <h3>Benefícios Exclusivos</h3>
                  <p>
                    Oferecemos cartões diferenciados, investimentos acessíveis e
                    suporte 24/7 para atender todas as suas necessidades
                    financeiras.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="home-sobre__grid-item textos-foto">
            <div className="box-img-texto grid-center">
              <img src={logo} alt="Logo Orbia Bank" />

              <p>
                Seu dinheiro, sua liberdade, seu controle. <br /> A Orbia Bank é mais
                do que um banco digital. <br /><br />
                Acreditamos que tecnologia deve simplificar, não complicar.
              </p>
            </div>

            <div className="box-banner">
              <img src={bannerSobre} alt="Escritório Orbia Bank" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
