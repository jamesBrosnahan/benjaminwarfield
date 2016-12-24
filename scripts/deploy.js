/* eslint-env node */
/* eslint-disable strict, no-console */
'use strict';

const exec = require('child_process').exec;
const CF_DISTRIBUTION = process.env.CF_DISTRIBUTION || '';
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || '';
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || '';
const REGION = process.env.REGION || 'us-east-2'
const BUCKET = process.env.BUCKET || '';
const VERSION = process.env.TRAVIS_TAG || new Date().toISOString();

const runDeploy = () => {
  const cmd = `./node_modules/.bin/react-deploy-s3 \
    --access-key-id ${AWS_ACCESS_KEY_ID} \
    --secret-access-key ${AWS_SECRET_ACCESS_KEY} \
    --bucket ${BUCKET} \
     --region ${REGION} \
    --distribution-id ${CF_DISTRIBUTION}`;

  console.log(`Deploying ${VERSION}...`);

  exec(cmd, (error, stdout, stderr) => {
    console.log('Deployment complete.')
    if (error !== null) {
      console.log(`Error: ${error} stdout: ${stdout} stderr: ${stderr}`);
    }
  });
};

runDeploy();
