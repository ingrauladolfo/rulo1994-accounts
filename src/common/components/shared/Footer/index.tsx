import { useLanguage, useTheme } from "../../../context";
import { useCurrentYear } from "../../../hooks/useCurrentYear";

const translations = {
    copy: {
        es: "Todos los derechos reservados.",
        en: "All rights reserved.",
    },
};

const Footer = () => {
    const { theme } = useTheme();
    const { lang } = useLanguage();
    const yearRange = useCurrentYear(2019);

    return (
        <footer className={`w-full text-center font-extrabold py-4 ${theme === "dark" ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-950"}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
                <span>© {yearRange}</span>

                <span>{translations.copy[lang]}</span>
                <a href="https://ingrauladolfo-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    <img
                        src="/esdmx.webp"
                        alt="Logo ingrauladolfo"
                        className="size-24 object-contain"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
