import BannerTopo from "./BannerTopo";
import Footer from "./Footer";
import Header from "./Header";
import Sobre from "./Sobre";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <BannerTopo />
      <Sobre />
      <Footer />
    </>
  );
};

export default PublicLayout;