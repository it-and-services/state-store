const gulp = require('gulp');

gulp.task('default', function () {
    return gulp.src(['ChangeLog', '../../README.md', '../../LICENSE']).pipe(gulp.dest('../../dist/ngx-state-store'));
});
