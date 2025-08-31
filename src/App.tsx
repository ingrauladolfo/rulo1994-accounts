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
    pathToTitle.find(entry => Object.values(entry.path).includes(path))

  useEffect(() => {
    const match = getMatchedRoute(pathname)
    const title = match
      ? match.title[lang]
      : lang === 'en'
        ? 'Error | Page not found'
        : 'Error | Página no encontrada'

    document.title = title;

    // Actualiza los metadatos de OpenGraph
    const metaTitle = document.querySelector('meta[property="og:title"]');
    if (metaTitle) {
      metaTitle.setAttribute('content', title);
    } else {
      const newMetaTitle = document.createElement('meta');
      newMetaTitle.setAttribute('property', 'og:title');
      newMetaTitle.setAttribute('content', title);
      document.head.appendChild(newMetaTitle);
    }

    // Actualiza la descripción de OpenGraph
    const description = match
      ? match.description?.[lang] || 'Descripción breve de tu aplicación'
      : 'Descripción breve de tu aplicación';
    const metaDescription = document.querySelector('meta[property="og:description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.setAttribute('property', 'og:description');
      newMetaDescription.setAttribute('content', description);
      document.head.appendChild(newMetaDescription);
    }
  }, [pathname, lang])

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;