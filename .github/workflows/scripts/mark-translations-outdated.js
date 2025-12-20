#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const WARNING_BANNERS = {
  'es': `:::warning La traducción puede estar desactualizada
La versión en inglés de este documento se actualizó recientemente. Es posible que esta traducción aún no refleje esos cambios.

¡Ayuda a mantener nuestras traducciones actualizadas! Si hablas este idioma con fluidez, considera revisar la [versión en inglés](ENGLISH_DOC_LINK) y actualizar esta traducción.
:::

`,
  'pt-BR': `:::warning A tradução pode estar desatualizada
A versão em inglês deste documento foi atualizada recentemente. Esta tradução pode não refletir essas alterações ainda.

Ajude-nos a manter nossas traduções atualizadas! Se você é fluente neste idioma, considere revisar a [versão em inglês](ENGLISH_DOC_LINK) e atualizar esta tradução.
:::

`,
};

const DEFAULT_WARNING = `:::warning Translation May Be Outdated
The English version of this document was recently updated. This translation may not reflect those changes yet.

Please help keep our translations up to date! If you're fluent in this language, consider reviewing the [English version](ENGLISH_DOC_LINK) and updating this translation.
:::

`;

const WARNING_MARKER = ':::warning';

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

    const warningBanner = WARNING_BANNERS[lang] || DEFAULT_WARNING;
    const warningWithLink = warningBanner.replace('ENGLISH_DOC_LINK', englishDocLink);

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
