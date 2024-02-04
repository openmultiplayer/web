import ISO6391 from "iso-639-1";

const missingLanguages: Record<string, string> = {
  "zh-tw": "繁體中文",
  "zh-cn": "简体中文",
  "ar": "العربية",
  "pt-BR": "Português do Brasil"
};

const getLanguageName = (short: string) =>
  ISO6391.getNativeName(short) || missingLanguages?.[short] || short;

export default getLanguageName;
