const gulp = require('gulp');
const sass = require('gulp-sass');
const watchSass = require('gulp-watch-sass');
const cleanCSS = require('gulp-clean-css');
const dest = require('gulp-dest');

gulp.task('sass', () =>
  gulp.src('./src/**/main.scss')
  .pipe(sass({
    includePaths: ['./node_modules/']
  }))
  .pipe(gulp.dest('./public'))
);

gulp.task('sass:watch', () =>
  watchSass(
    ['./src/**/*.scss'],
    {includePaths: ['./node_modules/']})
  .pipe(sass({
    includePaths: ['./node_modules']
  }))
  .pipe(gulp.dest('./public'))
);

gulp.task('minify-css', () => {
  return gulp.src('./public/*.css')
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(dest('./', {ext: "min.css"}))
    .pipe(gulp.dest('./public'));
});
