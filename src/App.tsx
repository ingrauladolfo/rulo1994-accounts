import { useEffect } from "react";
import { Footer, Navbar } from "./common/components";
import { useLanguage } from "./common/context";
import { Home } from "./pages";
import { pathToTitle } from "./common/assets/data/routes/pathToTitle";
import { useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  const getMatchedRoute = (path: string) =>
    pathToTitle.find(entry => Object.values(entry.path).includes(path));

  useEffect(() => {
    const match = getMatchedRoute(pathname);

    const title = match
      ? match.title?.[lang] || match.title?.["es"] || "Error | Página no encontrada"
      : lang === "en"
        ? "Error | Page not found"
        : "Error | Página no encontrada";

    const description = match
      ? match.description?.[lang] || match.description?.["es"] || "Descripción breve de tu aplicación"
      : "Descripción breve de tu aplicación";

    // Title del documento
    document.title = title;

    // OpenGraph title
    const metaTitle = document.querySelector('meta[property="og:title"]');
    if (metaTitle) {
      metaTitle.setAttribute("content", title);
    }

    // OpenGraph description
    const metaDescription = document.querySelector('meta[property="og:description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Twitter title
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }

    // Twitter description
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }
  }, [pathname, lang]);

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
