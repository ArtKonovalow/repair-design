const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hellow', function() {
   console.log('Привет, мир!');
   document();
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});