const gulp = require('gulp');
const sass = require('gulp-sass');
const watchSass = require('gulp-watch-sass');

gulp.task('sass', () =>
  gulp.src('src/sass/main.scss')
  .pipe(sass({
    includePaths: ['./node_modules/']
  }))
  .pipe(gulp.dest('public'))
);

gulp.task('sass:watch', () =>
  watchSass(
    ['src/sass/main.scss'],
    {includePaths: ['./node_modules/']})
  .pipe(sass({
    includePaths: ['./node_modules']
  }))
  .pipe(gulp.dest('public'))
);
