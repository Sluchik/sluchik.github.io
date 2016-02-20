var gulp = require('gulp');
var concatCss = require('gulp-concat-css'); // виклик плагіна
var	minifyCSS = require('gulp-minify-css');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
watch = require('gulp-watch');


gulp.task('default', function () {
  return gulp.src('css/styles/*.css')
    .pipe(concatCss('mainStyle.css'))
    .pipe(gulp.dest('css/build/'))
    .pipe(minifyCSS({keepBreaks:true}))
     .pipe(rename('mainStyle.min.css'))
     .pipe(autoprefixer({
			browsers: ['last 2 versions', '>1%', 'ie 9'],
			cascade: false
		}))
     .pipe(gulp.dest('css/'));
});
//watch
gulp.task('watch', function () {
   gulp.watch('css/styles/*.css', ['default'])
})
