import bannerTopo from "../../assets/Home/bannerTop.jpg"

const BannerTopo = () => {
  return (
    <section className="home-banner-topo-section">
      <div className="box-img">
        <img src={bannerTopo} alt="Banner com cartões" />
      </div>
      
      <div className="home-banner-topo wrapper">
        <div className="box-texto">
          <h1>Escolha o cartão <br /> certo você</h1>
          <p>Comece com flexibilidade. Avance com recompensas. <br /> Desbloqueie benefícios exclusivos</p>
          <a href="">Compare opções</a>
        </div>
      </div>
    </section>
  );
};

export default BannerTopo;
