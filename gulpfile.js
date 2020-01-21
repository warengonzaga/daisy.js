/**
 * Gulpfile for DaisyJS
 * By Waren Gonzaga
 **/

// gulp packages
const gulp      = require('gulp');
const fs        = require('fs');
const clean     = require('gulp-clean');
const rename    = require('gulp-rename');
const header    = require('gulp-header');
const jshint    = require('gulp-jshint');
const stylish   = require('jshint-stylish');
const uglify    = require('gulp-uglify');
const options   = require('gulp-options');
const pipeline  = require('readable-stream').pipeline;

// gulp paths
const path = {
  build: './prod',
  source: './src'
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
    ' * Maintained and LTS Version of Particleground by jnicol',
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

// check scripts for production
function devcheck() {
  return gulp
    .src([path.source+'/daisy.js'], {allowEmpty: true})
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'))
    .pipe(rename('daisy-v'+pkg.version+'.js'))
    .pipe(gulp.dest([path.build]));
}

// minify scripts for production
function minifyjs() {
  return pipeline(
    gulp.src([path.build+'/daisy-v'+pkg.version+'.js']),
      uglify(),
      rename({
        suffix: '.min',
        extname: '.js'
      }),
    gulp.dest([path.build])
  );
}

// add copyright label
function copyright() {
  return gulp
    .src([path.build+'/*.js'], {allowEmpty: true})
    .pipe(header(copydata.copybanner, pkg))
    .pipe(gulp.dest([path.build]));
}

// copy dev build to root
function copyDevJS() {
  return gulp
    .src([path.build+'/daisy-v'+pkg.version+'.js'], {allowEmpty: true})
    .pipe(rename({
      basename: 'daisy',
      extname: '.js'
    }))
    .pipe(gulp.dest('./'));
}

//copy minified build to root
function copyMinJS() {
  return gulp
    .src([path.build+'/daisy-v'+pkg.version+'.min.js'], {allowEmpty: true})
    .pipe(rename({
      basename: 'daisy.min',
      extname: '.js'
    }))
    .pipe(gulp.dest('./'));
}

// cleaning options
function cleanOptions() {
  if(options.has('scripts')) {
    return gulp
      .src([path.build+'/*'], {allowEmpty: true})
      .pipe(clean());
  } else if (options.has('build')) {
    return gulp
      .src([path.build], {allowEmpty: true})
      .pipe(clean());
  } else if(options.has('daisy')) {
    return gulp
      .src('./daisy*.js', {allowEmpty: true})
      .pipe(clean());
  } else {
    return gulp
      .src([path.build], {allowEmpty: true})
      .pipe(clean());
  } 
}

// clean production folder
function cleanprod() {
  return gulp
    .src('./prod', {allowEmpty: true})
    .pipe(clean());
}

// clean existing builds
function cleanroot() {
  return gulp
    .src('./daisy*.js')
    .pipe(clean());
}

// gulp series
const build = gulp.series([devcheck, minifyjs, copyright, copyDevJS, copyMinJS]);
const cleanAll = gulp.series([cleanprod, cleanroot]);

// gulp commands
exports.devcheck    = devcheck;
exports.copyright   = copyright;
exports.minifyjs    = minifyjs;
exports.copydevjs   = copyDevJS;
exports.copyminjs   = copyMinJS;
exports.cleanprod   = cleanprod;
exports.cleanroot   = cleanroot;
exports.reset       = cleanAll;
exports.clean       = cleanOptions;
exports.build       = build;
exports.default     = build;
