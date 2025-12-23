#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Map language codes to their StaleTranslationWarning component names
// When adding a new language, add the mapping here AND in frontend/src/components/templates/index.ts
const WARNING_COMPONENTS = {
  'es': 'StaleTranslationWarningES',
  'pt-BR': 'StaleTranslationWarningPT',
  'ru': 'StaleTranslationWarningRU',
};

const DEFAULT_WARNING_COMPONENT = 'StaleTranslationWarning';

const WARNING_MARKER = '<StaleTranslationWarning';

const changedFilesPath = path.join(process.cwd(), 'changed_english_docs.txt');
if (!fs.existsSync(changedFilesPath)) {
  console.log('No changed English docs file found');
  process.exit(0);
}

const changedEnglishDocs = fs.readFileSync(changedFilesPath, 'utf8')
  .trim()
  .split('\n')
  .filter(line => line.trim().length > 0);

if (changedEnglishDocs.length === 0) {
  console.log('No changed English docs to process');
  process.exit(0);
}

const i18nDir = path.join(process.cwd(), 'frontend', 'i18n');
if (!fs.existsSync(i18nDir)) {
  console.log('No i18n directory found');
  process.exit(0);
}

const languages = fs.readdirSync(i18nDir).filter(item => {
  const itemPath = path.join(i18nDir, item);
  return fs.statSync(itemPath).isDirectory();
});

console.log(`Found ${languages.length} language directories: ${languages.join(', ')}`);

let totalFilesMarked = 0;
const markedFiles = [];

changedEnglishDocs.forEach(englishDocPath => {
  const relativePath = englishDocPath.replace('frontend/docs/', '');
  const englishDocLink = `/docs/${relativePath.replace('.md', '')}`;

  console.log(`\nProcessing: ${englishDocPath}`);
  console.log(`  Relative path: ${relativePath}`);

  languages.forEach(lang => {
    const translationPath = path.join(
      i18nDir,
      lang,
      'docusaurus-plugin-content-docs',
      'current',
      relativePath
    );

    if (!fs.existsSync(translationPath)) {
      console.log(`  [${lang}] Translation does not exist, skipping`);
      return;
    }

    let content = fs.readFileSync(translationPath, 'utf8');

    if (content.includes(WARNING_MARKER)) {
      console.log(`  [${lang}] Already has outdated warning, skipping`);
      return;
    }

    let frontmatterEnd = 0;
    if (content.startsWith('---')) {
      const secondDelimiter = content.indexOf('---', 3);
      if (secondDelimiter !== -1) {
        frontmatterEnd = secondDelimiter + 3;
      }
    }

    const componentName = WARNING_COMPONENTS[lang] || DEFAULT_WARNING_COMPONENT;
    const warningWithLink = `<${componentName} englishDocLink="${englishDocLink}" />\n\n`;

    let updatedContent;
    if (frontmatterEnd > 0) {
      const frontmatter = content.substring(0, frontmatterEnd);
      const restOfContent = content.substring(frontmatterEnd).trimStart();
      updatedContent = `${frontmatter}\n\n${warningWithLink}${restOfContent}`;
    } else {
      const restOfContent = content.trimStart();
      updatedContent = `${warningWithLink}${restOfContent}`;
    }

    fs.writeFileSync(translationPath, updatedContent, 'utf8');
    console.log(`  [${lang}] ✓ Marked as outdated`);
    totalFilesMarked++;
    markedFiles.push(translationPath.replace(process.cwd() + path.sep, '').replace(/\\/g, '/'));
  });
});

console.log(`\n✅ Total files marked: ${totalFilesMarked}`);

if (markedFiles.length > 0) {
  const markedFilesPath = path.join(process.cwd(), 'marked_translation_files.txt');
  fs.writeFileSync(markedFilesPath, markedFiles.join('\n'), 'utf8');
  console.log(`Marked files list written to: ${markedFilesPath}`);
}
