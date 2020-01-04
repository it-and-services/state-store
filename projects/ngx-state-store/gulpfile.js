const gulp = require('gulp');

gulp.task('default', function () {
  return gulp.src('ChangeLog').pipe(gulp.dest('../../dist/ngx-state-store'));
});
