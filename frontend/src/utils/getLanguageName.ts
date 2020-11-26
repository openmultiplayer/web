import ISO6391 from "iso-639-1";

const missingLanguages = {
  "zh-TW": "正體中文/繁體中文",
  "zh-CN": "简化字",
};

const getLanguageName = (short: string) =>
  ISO6391.getNativeName(short) || missingLanguages?.[short] || short;

export default getLanguageName;
