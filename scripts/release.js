let exec = require('child_process').exec;
let moment = require('moment');

let dryRun = process.env.DRY_RUN || false;
let releaseToEnv = process.argv[2] || 'dev';
let m = moment();

/*eslint no-console: */
let tagName = function(e) {
  let n = m.utc().format('YYYY-MM-DD[T]HH[.]mm[.]ss');

  // Append to prod tags to make them recognizable.
  if (e === 'prod') {
    return n + '-prod';
  }

  return n;
};

let pushTag = function(tag) {
  let cmd = `git push origin ${tag}`;

  exec(cmd, (error, stdout, stderr) => {
    console.log('Tag pushed to origin', tag);
    if (error !== null) {
      console.log(stderr);
    }
  });
};

let createTag = function(n) {
  let cmd = `git tag -a ${n} -m "Releasing version: ${n}"`;

  if (dryRun) {
    console.log('Not creating new tag', n);
  } else {
    exec(cmd, (error, stdout, stderr) => {
      console.log('New git tag created', n);
      pushTag(n);
      if (error !== null) {
        console.log(stderr);
      }
    });
  }
};

createTag(tagName(releaseToEnv));
