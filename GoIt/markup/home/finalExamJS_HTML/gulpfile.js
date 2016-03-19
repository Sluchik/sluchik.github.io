var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var watch = require('gulp-watch');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');



gulp.task('css', function () {
  return gulp.src(['css/normalize.css', 'css/commanstyle.css', 'css/fonts.css', 'css/header.css', 'css/sliders.css', 'css/media.css','css/profile.css', 'css/owl.carousel.css'])
  .pipe(autoprefixer({
  			browsers: ['last 2 versions'],
  			cascade: false
  		}))
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest('css/build/'));
});



gulp.task('watch', function () {
   gulp.watch('css/*.css', ['css'])
})
