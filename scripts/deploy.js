/* eslint-env node */
/* eslint-disable strict, no-console */
'use strict';

const exec = require('child_process').exec;
const CF_DISTRIBUTION = process.env.CF_DISTRIBUTION || '';
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || '';
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || '';
