import type { platformColors } from "../const/platformColors";

const getPlatformKey = (url: string): keyof typeof platformColors => {
  if (url.includes('twitch')) { return 'twitch'; }
  if (url.includes('kick')) { return 'kick'; }
  if (url.includes('youtube')) { return 'youtube'; }
  if (url.includes('instagram')) { return 'instagram'; }
  if (url.includes('facebook')) { return 'facebook'; }
  if (url.includes('tiktok')) { return 'tiktok'; }
  if (url.includes('discord')) { return 'discord'; }
  return 'default';
};

export { getPlatformKey };
