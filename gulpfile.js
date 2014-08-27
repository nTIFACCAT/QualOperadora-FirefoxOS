var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css');

gulp.task('minifyJS', function () {
  gulp.src('assets/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/assets/js/'))
});

gulp.task('minifyCSS', function() {
  gulp.src('assets/css/style.css')
    .pipe(minifyCSS({keepBreaks: false}))
    .pipe(gulp.dest('build/assets/css'))
});


// $ gulp deploy
gulp.task('deploy', ['minifyJS', 'minifyCSS']);