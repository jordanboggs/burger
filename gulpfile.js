const gulp = require('gulp');
const sass = require('gulp-sass');
const watchSass = require('gulp-watch-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const dest = require('gulp-dest');

gulp.task('sass', () => {
  gulp.src('./src/**/main.scss')
  .pipe(sass({
    includePaths: ['./node_modules/']
  }))
  .pipe(gulp.dest('./public'));
});

gulp.task('sass:watch', () => {
  watchSass(
    ['./src/**/*.scss'],
    {includePaths: ['./node_modules/']})
  .pipe(sass({
    includePaths: ['./node_modules']
  }))
  .pipe(autoprefixer())
  .pipe(cleanCSS({compatibility: '*'}))
  .pipe(dest('./', {ext: "min.css"}))
  .pipe(gulp.dest('./public'));
});

gulp.task('minify-css', () => {
  return gulp.src('./public/*.css')
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(dest('./', {ext: "min.css"}))
    .pipe(gulp.dest('./public'));
});

/*
gulp.task('yourPlaginNameHere', function () { 
  gulp.src('./merehead/first-catalog/app-style/*.scss') 
  .pipe(sass()) 
  .pipe(autoprefixer()) 
  .pipe(cssmin()) 
  .pipe(rename({suffix: '.min'})) 
  .pipe(gulp.dest('./mereheadt/secondary-catalog/app-style')); 
});  Read more: http://merehead.com/blog/how-to-use-gulp/
*/
