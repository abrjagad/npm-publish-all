'use strict';

const child_process = require('child_process');
const exec = child_process.exec;

function bumpVersion(pathToDir, type, extraArgs) {

  return new Promise((resolve, reject) => {
    //construct the command
    //eg: npm version major --force
    exec(`npm version ${type} ${extraArgs}`, { cwd: pathToDir }, (error, stdout, stderr) => {
      if (error) { reject(error); return; } resolve({ stdout: stdout, pathToDir: pathToDir });
    });
  });
}

function publish(pathToDir, extraArgs) {

  return new Promise((resolve, reject) => {
    //construct the command
    //eg: npm publish --tag alpha
    exec(`npm publish ${extraArgs}`, { cwd: pathToDir }, (error, stdout, stderr) => {
      if (error) { reject(error); return; } resolve({ stdout: stdout, pathToDir: pathToDir });
    });
  });
}

module.exports = {
  bumpVersion: bumpVersion,
  publish: publish
}