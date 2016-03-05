var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var webserver = require('gulp-webserver');

// виклик плагіна


gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('imagemin', function () {
     gulp.src('img/*.*')
     .pipe(imagemin({
       optimizationLevel:4,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
		}))
    .pipe(gulp.dest('imgmin/'));
});

gulp.task('sass', function () {
     gulp.src('css/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/totalcss/'));
});

gulp.task('css', function () {
  gulp.src('css/totalcss/**/*.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
    .pipe(concatCss('mainStyle.css'))
    .pipe(gulp.dest('css/build/'))

});

gulp.task('watch',['css'], function () {
   gulp.watch('css/sass/*.scss', ['sass'])
   gulp.watch('css/totalcss/**/*.css', ['css'])
})

gulp.task('default', ['webserver', 'watch']);
