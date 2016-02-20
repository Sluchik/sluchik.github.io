var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
// виклик плагіна
gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
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
   gulp.watch('sass/*.scss', ['sass','css'])
})
