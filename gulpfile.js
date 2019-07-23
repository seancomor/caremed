const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//compile sass

gulp.task('sass', function(){
    return gulp.src(['styles/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('styles/css'))
        .pipe(browserSync.stream());
})

// watch & serve
gulp.task("serve", gulp.series(["sass"], function () {
    browserSync.init({
        server: ""
    });

    gulp.watch(["styles/scss/*.scss"], gulp.series(["sass"]));
    gulp.watch(["*.html"]).on("change", browserSync.reload);
}));

// default task
gulp.task("default", gulp.series(["serve"]));
 
