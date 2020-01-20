/**
 * Gulpfile for DaisyJS
 * By Waren Gonzaga
 **/

// gulp packages
const gulp    = require("gulp");
const fs      = require("fs");
const clean   = require("gulp-clean");
const rename  = require("gulp-rename");
const header  = require("gulp-header");
const jshint  = require("gulp-jshint");
const stylish = require("jshint-stylish");
const uglify  = require("gulp-uglify");
const pipeline = require("readable-stream").pipeline;

// gulp paths
const path = {
  build: "./prod",
  source: "./src"
};

// copyright label
const pkg = JSON.parse(fs.readFileSync('package.json'));
const copydata = {
  copybanner: [
    '/*!',
    ' * <%= name %> - <%= homepage %>',
    ' * Version: <%= version %>',
    ' * Demo: <%= demo %>',
    ' * Licensed under the MIT license - http://opensource.org/licenses/MIT',
    ' * Copyright (c) <%= new Date().getFullYear() %> <%= author %>',
    ' * ',
    ' * Facebook: @WarenGonzagaOfficialPage',
    ' * Twitter: @Waren_Gonzaga',
    ' * Github: @WarenGonzaga',
    ' * Website: warengonzaga.com',
    ' * ',
    ' * Maintained version of Particleground by jnicol',
    ' * https://github.com/jnicol/particleground',
    ' * ',
    ' * Donote or Support!',
    ' * https://buymeacoff.ee/warengonzaga',
    ' */\n\n',
  ].join('\n')
};

/**
 * Gulp Tasks
 * Writen by Waren Gonzaga
 */

function devcheck() {
  return gulp
    .src([path.source+'/daisy.js'], {allowEmpty: true})
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'))
    .pipe(rename('daisy-v'+pkg.version+'.js'))
    .pipe(gulp.dest([path.build]));
}

function minifyjs() {
  return pipeline(
    gulp.src([path.build+'/daisy-v'+pkg.version+'.js']),
      uglify(),
      rename({
        suffix: ".min",
        extname: ".js"
      }),
    gulp.dest([path.build])
  )
}

function copyright() {
  return gulp
    .src([path.build+'/*.js'], {allowEmpty: true})
    .pipe(header(copydata.copybanner, pkg))
    .pipe(gulp.dest([path.build]));
}

function copytoroot() {
  return gulp
    .src(path.build+'/*.js')
    .pipe(gulp.dest('./'));
}

function cleanprod() {
  return gulp
    .src('./prod', {allowEmpty: true})
    .pipe(clean());
}

function cleanroot() {
  return gulp
    .src('./daisy*.js')
    .pipe(clean());
}

// gulp series
const build = gulp.series([devcheck, minifyjs, copyright, copytoroot]);
const cleandev = gulp.series([cleanprod, cleanroot]);

// gulp commands
exports.devcheck    = devcheck;
exports.copyright   = copyright;
exports.minifyjs    = minifyjs;
exports.copytoroot  = copytoroot;
exports.cleanprod   = cleanprod;
exports.cleanroot   = cleanroot;
exports.cleandev    = cleandev;
exports.build       = build;
exports.default     = build;