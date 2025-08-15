import { platformColors } from "../../utils";

const getHoverBg = (theme: string) => {
    return theme === 'light' ? 'text-gray-950' : 'text-gray-100 ';
};
const getThemeColors = (theme: string, key: keyof typeof platformColors) => {
  const colors = platformColors[key];

  return {
    iconBg: theme === 'dark' ? colors.iconDark : colors.iconLight,
    cardBg: theme === 'dark' ? colors.cardDark : colors.cardLight,
    textColor: theme === 'dark' ? colors.textDark : colors.textLight,
  };
};


export { getHoverBg, getThemeColors  };