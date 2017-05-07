/* Importamos gulp */
const gulp = require('gulp');

/* Otros módulos que vayamos a necesitar */
// server
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

// Server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src',
      index: 'index.html',
      https: false/*,
      middleware: [ apiFallback() ] */
    },
  });

  gulp.watch("src/app/**/*.js").on("change", reload);
  gulp.watch("src/**/*.html").on("change", reload);
  gulp.watch("src/app/styles/*.css").on("change", reload);
  gulp.watch("src/app/styles/**/*.jpg").on("change", reload);
});


gulp.task('default', ['browserSync'], function() {
    console.log('Default');
});
