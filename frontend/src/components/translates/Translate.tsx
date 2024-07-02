const translateText = (locale, group, key, placeholders) => {
  if (locale === 'en' && !placeholders) {
    return key;
  }

  const plainText = key.replace(/<[^>]+>/g, '');

  let translation = {};
  try {
    translation = require(`./translations/${locale}.json`);
  } catch (error) {
    return translateText('en', group, key, placeholders);
  }

  const translatedText = translation[group]?.[plainText] || plainText;

  // Replace placeholders with corresponding params if placeholders are provided
  let replacedText = translatedText;
  if (placeholders && typeof placeholders === 'object') {
    Object.entries(placeholders).forEach(([placeholder, value]) => {
      replacedText = replacedText.replace(new RegExp(`{${placeholder}}`, 'g'), value);
    });
  }

  return replacedText;
};

module.exports = translateText;
