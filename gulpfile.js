var gulp = require('gulp');
var babel = require('gulp-babel');

// babel
/*gulp.task('babel', function () {
  gulp.src('./_resource/js/script.js')
  .pipe(babel())
  .pipe(gulp.dest('dist'));
});*/

gulp.task('babel', () =>
  gulp.src('./_resource/js/script.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
  .pipe(gulp.dest('dist'))
);
