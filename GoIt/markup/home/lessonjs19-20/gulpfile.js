var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');


// виклик плагіна
gulp.task('sass', function () {
  return gulp.src('css/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});

gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(autoprefixer())
    .pipe(concatCss('mainStyle.css'))
    .pipe(gulp.dest('css/build/'));
});

gulp.task('watch', function () {
   gulp.watch('css/sass/*.scss', ['sass','css'])
})
