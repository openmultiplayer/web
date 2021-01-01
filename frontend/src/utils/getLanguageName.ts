import ISO6391 from "iso-639-1";

const missingLanguages = {
  "zh-tw": "繁體中文",
  "zh-cn": "简体中文",
};

const getLanguageName = (short: string) =>
  ISO6391.getNativeName(short) || missingLanguages?.[short] || short;

export default getLanguageName;
