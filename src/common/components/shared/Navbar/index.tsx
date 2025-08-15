import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme, useLanguage } from "../../../context";
import { getHoverBg } from "../../../assets/styles";
import { MX, US } from "country-flag-icons/react/3x2";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { lang, toggleLang } = useLanguage();

    const hoverBg = getHoverBg(theme);

    return (
        <nav className={`w-full flex justify-end items-center gap-4 px-4 py-2 ${theme === "dark" ? "bg-gray-950" : "bg-gray-100"}`}>
            {/* Botón de tema */}
            <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`p-2 rounded-full text-sm transition-all ${hoverBg}`}
            >
                {theme === "dark" ? <FaMoon /> : <FaSun />}
            </button>

            {/* Botón de idioma */}
            <button
                onClick={toggleLang}
                aria-label="Toggle language"
                className={`p-2 rounded-full transition-all ${hoverBg}`}
            >
                {lang === "es" ? <MX className="size-5" /> : <US className="size-5" />}
            </button>
        </nav>
    );
};

export default Navbar;
