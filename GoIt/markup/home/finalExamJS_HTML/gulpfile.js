var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');


gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('css', function () {
  return gulp.src(['css/commonstyle.css', 'css/fonts.css', 'css/header.css', 'css/carousel.css',  'css/profiles.css', 'css/holidayactivity.css', 'css/search.css', 'css/footer.css', 'css/media.css'])
  .pipe(autoprefixer({
  			browsers: ['last 2 versions'],
  			cascade: false
  		}))
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest('css/build/'));
});

gulp.task('sass', function () {
     gulp.src('css/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch',['css'], function () {
   gulp.watch('css/sass/*.scss', ['sass'])
   gulp.watch('css/*.css', ['css'])
});

gulp.task('default', ['webserver','watch']);
