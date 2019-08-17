const { spawn, exec } = require('child_process');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const gutil = require('gulp-util');
const path = require('path');
const { config } = require('./config');
const port = process.env.PORT || 3000;

const consoleLog = data => gutil.log(data.toString().trim());

const toWatch = ['./src'];

gulp.task('server', () => nodemon({
  script: './bin/www',
  watch: toWatch,
	ext: 'js yaml',
	ignore: ['build/**'],
  env: {
    DEBUG: 'server:server',
    NODE_PATH: path.resolve(__dirname, 'server'),
    NODE_ENV: 'development',
  },
}));

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}

//gulp.task('mongo', runCommand('mongod --port 27017 --replSet rscriteria'));
gulp.task('mongo', runCommand('mongod --port 27017'));


gulp.task('run:dev', gulp.parallel(['mongo', 'server']), function(){
	browser.init({server: './_site', port: port});
});