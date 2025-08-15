import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useLanguage, useTheme } from '../../common/context';
import { socialLinks } from '../../common/assets/data/pages/socialLinksData';
import { getPlatformKey, handleClick, platformColors } from '../../common/utils';
import { getThemeColors } from '../../common/assets/styles';

const Home: FC = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start p-4 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'
        }`}
    >
      {/* Imagen de perfil */}
      <img
        src="/rulo1994.webp"
        alt="Foto de perfil"
        className="w-32 h-32 rounded-full object-cover mb-8 shadow-md"
      />

      {/* Redes sociales */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        {socialLinks.map(({ url, icon, username, key: customKey }, idx) => {
          const key = url ? getPlatformKey(url) : customKey;
          const { iconBg, cardBg, textColor } = getThemeColors(
            theme,
            key as keyof typeof platformColors
          );

          const displayUsername =
            typeof username === 'string'
              ? username
              : username[lang];  // Aquí seleccionas 'es' o 'en' según el idioma actual

          return (
            <button
              key={idx}
              onClick={() => url && handleClick(url)}
              className={`flex items-center justify-start w-full rounded-full px-4 py-3 shadow-sm hover:shadow-md transition ${url ? 'cursor-pointer' : 'cursor-default'
                }`}
              style={{ backgroundColor: cardBg }}
              type="button"
              aria-label={
                url
                  ? `Abrir perfil de ${displayUsername}`
                  : `Perfil de ${displayUsername}`
              }
              disabled={!url}
            >
              <div
                className="flex items-center justify-center size-10 rounded-full text-white shrink-0"
                style={{ backgroundColor: iconBg }}
              >
                {icon}
              </div>
              <span
                className="ml-4 text-pretty text-center font-bold"
                style={{ color: textColor }}
              >
                {displayUsername}
              </span>

            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
