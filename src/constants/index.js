// Default configuration object
export const DEFAULT_CONFIG = {
    updaterUrl: "https://raw.githubusercontent.com/Urusira/ShiroGeHub/refs/heads/master/remote-config.json",
    launcherVer: 1,
    selectedGame: "",
    selectedLanguage: "",
    games: [],
  };

// Language constants
export const LANGUAGES = {
  RU: 'RU',
  EN: 'EN',
  PT: 'PT', 
  TW: 'TW'
};

// Language display names
export const LANGUAGE_DISPLAY_NAMES = {
  [LANGUAGES.RU]: 'Русский',
  [LANGUAGES.EN]: 'English',
  [LANGUAGES.PT]: 'Português',
  [LANGUAGES.TW]: '中文'
};

// Language to locale mapping
export const LANGUAGE_TO_LOCALE = {
  [LANGUAGES.RU]: 'ru',
  [LANGUAGES.EN]: 'en',
  [LANGUAGES.PT]: 'pt',
  [LANGUAGES.TW]: 'tw'
};

// Locale to language mapping
export const LOCALE_TO_LANGUAGE = {
  'ru': LANGUAGES.RU,
  'en': LANGUAGES.EN,
  'pt': LANGUAGES.PT,
  'tw': LANGUAGES.TW
};

// Configuration constants
export const CONFIG = {
  FILE_NAME: 'launcher-config.json',
  DEFAULT_LANGUAGE: LANGUAGES.RU,
  DEFAULT_VOICE_PACK: '',
  DEFAULT_LOCALE: 'ru'
};

// Launcher constants
export const LAUNCHER = {
  EXECUTABLE_NAME: 'ShiroGeHub.exe',
  UPDATE_BATCH_FILE: 'ShiroGeHub-update.bat',
  NEW_SUFFIX: '.new'
};

// Game parameter constants
export const GAME_PARAMS = {
  LANGUAGE_PLACEHOLDER: 'EGULANG'
};
