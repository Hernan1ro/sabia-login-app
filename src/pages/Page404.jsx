import "../styles/Page404.css";
import sabiaLogo from "../assets/logos/logo_fucsia.png";

const Page404 = () => {
  return (
    <div className="page404">
      <div>
        <h1>Error 404</h1>
        <img src={sabiaLogo} alt="Sabia logo" />
        <h2>Página no encontrada</h2>
      </div>
    </div>
  );
};

export default Page404;
