const { exec } = require('child_process');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const path = require('path');
const port = process.env.PORT || 3000;

const toWatch = ['./src'];

gulp.task('server', async() =>  nodemon({
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
  return async function (cb) {
    await exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}

gulp.task('mongo', runCommand('mongod --port 27017 --replSet rscriteria --bind_ip 127.0.0.1'));

gulp.task('run:dev', gulp.series(['mongo', 'server']), function(){
  browser.init({server: './_site', port: port});
});