#!/usr/bin/env node

const https = require('https');

const args = process.argv.slice(2);
const options = {
  repo: process.env.GITHUB_REPOSITORY || '',
  token: process.env.GITHUB_TOKEN || '',
  sha: process.env.GITHUB_SHA || '',
  label: '',
  pr: '',
};

for (let i = 0; i < args.length; i += 2) {
  const key = args[i];
  const value = args[i + 1] || '';
  switch (key) {
    case '--repo':
      options.repo = value;
      break;
    case '--token':
      options.token = value;
      break;
    case '--sha':
      options.sha = value;
      break;
    case '--label':
      options.label = value;
      break;
    case '--pr':
      options.pr = value;
      break;
    default:
      i -= 1;
  }
}

if (!options.repo || !options.token || !options.label) {
  console.error('Missing required arguments: repo, token, and label');
  process.exit(1);
}

const githubRequest = (path, accept) =>
  new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.github.com',
        path,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${options.token}`,
          'User-Agent': 'translations-workflow',
          Accept: accept || 'application/vnd.github+json',
        },
      },
      res => {
        let body = '';
        res.on('data', chunk => {
          body += chunk;
        });
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            try {
              resolve(JSON.parse(body));
            } catch (err) {
              reject(err);
            }
          } else {
            reject(new Error(`GitHub API responded with ${res.statusCode}: ${body}`));
          }
        });
      }
    );
    req.on('error', reject);
    req.end();
  });

const detectPrNumber = async () => {
  if (options.pr) {
    return options.pr;
  }
  if (!options.sha) {
    return '';
  }

  try {
    const pulls = await githubRequest(
      `/repos/${options.repo}/commits/${options.sha}/pulls`,
      'application/vnd.github.groot-preview+json'
    );
    if (Array.isArray(pulls) && pulls.length > 0) {
      return String(pulls[0].number);
    }
  } catch (error) {
    console.error(`Failed to determine PR number: ${error.message}`);
  }
  return '';
};

const main = async () => {
  try {
    const prNumber = await detectPrNumber();
    if (!prNumber) {
      process.stdout.write('label_present=false');
      return;
    }

    const issue = await githubRequest(`/repos/${options.repo}/issues/${prNumber}`);
    const labels = Array.isArray(issue.labels) ? issue.labels.map(label => label.name) : [];
    const hasLabel = labels.includes(options.label);
    process.stdout.write(`label_present=${hasLabel ? 'true' : 'false'}`);
  } catch (error) {
    console.error(`Failed to load labels: ${error.message}`);
    process.stdout.write('label_present=false');
  }
};

main();
