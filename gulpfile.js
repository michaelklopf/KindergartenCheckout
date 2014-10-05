var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var using = require('gulp-using');

gulp.task('browserify', function() {
  gulp.src('static/js/profile/main.js')
    .pipe(using())
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js/profile'));

  gulp.src('static/js/index/main.js')
    .pipe(using())
    .pipe(browserify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js/index'));

  gulp.src('static/js/login/main.js')
    .pipe(using())
    .pipe(browserify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js/login'));

  gulp.src('static/js/signup/main.js')
    .pipe(using())
    .pipe(browserify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js/signup'));
});

gulp.task('copy', function() {
  gulp.src('app/views/*')
    .pipe(using())
    .pipe(gulp.dest('./dist/views'));

  gulp.src('static/css/*.css')
    .pipe(using())
    .pipe(gulp.dest('./dist/css'));

  gulp.src('bower_components/bootstrap/dist/css/*.css')
    .pipe(using())
    .pipe(gulp.dest('./dist/css'));

  gulp.src('bower_components/fontawesome/css/*.css')
    .pipe(using())
    .pipe(gulp.dest('./dist/css'));

  gulp.src('bower_components/fontawesome/fonts/**.*')
    .pipe(using())
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('default',['browserify', 'copy']);

gulp.task('watch', function() {
  gulp.watch('static/**/*.*', ['default']);
});
