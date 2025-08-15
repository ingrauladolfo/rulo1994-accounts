import { useEffect } from "react";
import { Footer, Navbar } from "./common/components";
import { useLanguage } from "./common/context";
import { Home } from "./pages";
import { pathToTitle } from "./common/assets/data/routes/pathToTitle";
import { useLocation } from "react-router-dom";  // 👈 Importa useLocation

const App = () => {
  const { pathname } = useLocation();  // 👈 Obtén pathname
  const { lang } = useLanguage();
  const getMatchedRoute = (path: string) =>
    pathToTitle.find(entry => Object.values(entry.path).includes(path))

  useEffect(() => {
    const match = getMatchedRoute(pathname)
    document.title = match
      ? match.title[lang]
      : lang === 'en'
        ? 'Error | Page not found'
        : 'Error | Página no encontrada'
  }, [pathname, lang])
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};


export default App