var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('minifyJS', function () {
  gulp.src('assets/js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('assets/js/'))
});

gulp.task('minifyCSS', function() {
  gulp.src('assets/css/style.css')
    .pipe(minifyCSS({keepBreaks: false}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('assets/css'))
});

// $ gulp deploy
gulp.task('deploy', ['minifyJS', 'minifyCSS']);