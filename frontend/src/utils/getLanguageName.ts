import ISO6391 from "iso-639-1";

const missingLanguages = {
  "zh-TW": "繁体中文",
  "zh-CN": "简体中文",
};

const getLanguageName = (short: string) =>
  ISO6391.getNativeName(short) || missingLanguages?.[short] || short;

export default getLanguageName;
