import { FaDiscord, FaFacebook, FaFlag, FaInstagram, FaTiktok, FaTwitch, FaYoutube } from 'react-icons/fa6';
import { SiKick } from 'react-icons/si';
import type { platformColors } from '../../../utils';
import type { JSX } from 'react';
type TranslatedUsername = string | { es: string; en: string };

type SocialLink = {
  icon: JSX.Element;
  username: TranslatedUsername;
  url?: string;
  key?: keyof typeof platformColors;
};


const socialLinks: SocialLink[] = [
  {
    icon: <FaTwitch />,
    username: 'rulo1994',
    url: 'https://www.twitch.tv/rulo1994',
  },
  {
    icon: <SiKick className='text-[#58FC20]' />,
    username: 'rulo1994',
    url: 'https://kick.com/rulo1994',
  },
  {
    icon: <FaYoutube />,
    username: '@Rulo1994',
    url: 'https://www.youtube.com/@Rulo1994',
  },
  {
    icon: <FaInstagram />,
    username: 'rulox.1994',
    url: 'https://instagram.com/rulox.1994',
  },
  {
    icon: <FaFlag className='text-[#E77E00]' />,
    username: 'Rulo.1994',
    url: 'https://www.facebook.com/rulox.1994/',
  },
  {
    icon: <FaFacebook />,
    username: 'Cylindrusskary Torres',
    url: 'https://www.facebook.com/rulos1994',
  },
  {
    icon: <FaTiktok />,
    username: '@rulo.1994',
    url: 'https://www.tiktok.com/@rulo.1994',
  },
  {
    icon: <FaDiscord />,
    username: 'Los rulines',
    url: 'https://discord.gg/tv77mAt4Zq',
  },
  {
    icon: (
      <img
        src="/epic-games.webp"
        alt="Epic Games Logo"
        className="size-24 object-contain"
      />
    ),
    username: {
      es: 'Código de creador: RULO1994',
      en: 'Support-A-Creator: RULO1994',
    }, 
    key: 'epic'
  }

];

export { socialLinks };
