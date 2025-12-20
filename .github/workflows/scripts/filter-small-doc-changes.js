#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

const MEANINGFUL_CHAR_THRESHOLD = 10; // minimum characters to count the change as worthy

const [, , baseRef, headRef, inputPath, outputPath] = process.argv;

if (!headRef || !inputPath || !outputPath) {
  console.error('Usage: node filter-small-doc-changes.js <baseRef> <headRef> <inputList> <outputList>');
  process.exit(1);
}

const fileList = fs
  .readFileSync(inputPath, 'utf8')
  .split('\n')
  .map(line => line.trim())
  .filter(Boolean);

const keptFiles = [];

const getFileLines = (ref, file) => {
  if (!ref) {
    return null;
  }

  try {
    const content = execSync(`git show ${ref}:${file}`, { encoding: 'utf8' });
    return content.replace(/\r/g, '').split('\n');
  } catch {
    return null;
  }
};

const frontmatterEndLine = lines => {
  if (!lines || lines[0] !== '---') {
    return 0;
  }

  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      return i + 1;
    }
  }
  return 0;
};

const isTrivialLine = (lineText, lineNumber, frontmatterLimit) => {
  if (lineNumber > 0 && frontmatterLimit > 0 && lineNumber <= frontmatterLimit) {
    return true;
  }
  return lineText.trim().length === 0;
};

const levenshtein = (a, b) => {
  if (a === b) {
    return 0;
  }
  const lenA = a.length;
  const lenB = b.length;
  if (lenA === 0) {
    return lenB;
  }
  if (lenB === 0) {
    return lenA;
  }

  const matrix = Array.from({ length: lenA + 1 }, () => new Array(lenB + 1).fill(0));

  for (let i = 0; i <= lenA; i++) {
    matrix[i][0] = i;
  }
  for (let j = 0; j <= lenB; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= lenA; i++) {
    for (let j = 1; j <= lenB; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + 1
        );
      }
    }
  }

  return matrix[lenA][lenB];
};

const hasMeaningfulDiff = (file, diffOutput) => {
  const baseLines = getFileLines(baseRef, file);
  const headLines = getFileLines(headRef, file);

  if (!diffOutput.trim()) {
    return false;
  }

  if (!baseLines) {
    return true;
  }

  const baseFrontmatterLimit = frontmatterEndLine(baseLines);
  const headFrontmatterLimit = frontmatterEndLine(headLines);

  let currentOldLine = 0;
  let currentNewLine = 0;
  const diffLines = diffOutput.split('\n');
  const pendingRemoved = [];
  let totalChangedChars = 0;

  for (const diffLine of diffLines) {
    if (diffLine.startsWith('@@')) {
      const match = diffLine.match(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      if (match) {
        currentOldLine = Number(match[1]);
        currentNewLine = Number(match[3]);
      }
      continue;
    }

    if (diffLine.startsWith('---') || diffLine.startsWith('+++')) {
      continue;
    }

    if (diffLine.startsWith('-')) {
      const text = baseLines[currentOldLine - 1] ?? '';
      if (!isTrivialLine(text, currentOldLine, baseFrontmatterLimit)) {
        pendingRemoved.push(text);
      }
      currentOldLine++;
      continue;
    }

    if (diffLine.startsWith('+')) {
      const text = headLines?.[currentNewLine - 1] ?? '';
      if (!isTrivialLine(text, currentNewLine, headFrontmatterLimit)) {
        if (pendingRemoved.length > 0) {
          const removed = pendingRemoved.shift();
          totalChangedChars += levenshtein(removed, text);
        } else {
          totalChangedChars += text.trim().length;
        }
        if (totalChangedChars >= MEANINGFUL_CHAR_THRESHOLD) {
          return true;
        }
      }
      currentNewLine++;
      continue;
    }
  }

  while (pendingRemoved.length > 0) {
    totalChangedChars += pendingRemoved.shift().trim().length;
    if (totalChangedChars >= MEANINGFUL_CHAR_THRESHOLD) {
      return true;
    }
  }

  return totalChangedChars >= MEANINGFUL_CHAR_THRESHOLD;
};

for (const file of fileList) {
  if (!baseRef) {
    keptFiles.push(file);
    continue;
  }

  let diffOutput = '';
  try {
    diffOutput = execSync(`git diff ${baseRef} ${headRef} --unified=0 -- ${file}`, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch (error) {
    diffOutput = error.stdout?.toString() ?? '';
    if (!diffOutput && !error.stdout) {
      keptFiles.push(file);
      continue;
    }
  }

  if (hasMeaningfulDiff(file, diffOutput)) {
    keptFiles.push(file);
  }
}

fs.writeFileSync(outputPath, keptFiles.join('\n'), 'utf8');
