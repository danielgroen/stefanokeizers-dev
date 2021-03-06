const   gulp = require('gulp'),
        del = require('del');

gulp.task('build:remove', () => {
    return del([`${global.paths.dist}`]);
});

gulp.task('build:build', () => {
  return gulp.src(`${global.paths.app}/**/*`)
             .pipe(gulp.dest(`./dist`));
});

gulp.task('build:clean', () => {
  return del([
              `${global.paths.dist}/sass`,
            ]);
});


gulp.task('build', gulp.series('sass','fonts', 'build:remove','build:build', 'build:clean', 'minify'));