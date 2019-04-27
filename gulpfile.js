var gulp = require('gulp');
//var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//Compilar o SASS
gulp.task('sass', gulp.series( function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        //.pipe(browserSync.stream());
}));

gulp.task('watch', gulp.series( function() {
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'], gulp.parallel( ['sass'] )); 
}));

gulp.task('default', gulp.series( ['sass', 'watch'] ));

/*
//Mover Js para src/js
gulp.task('js', function () {

    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.mim.js', 'node_modules/jquery/dist/jquery.min.js',
        'node_modules/pooper.js/dist/umd/pooper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());

});

//Servidor para olhar os HTML/SCSS
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);

});

gulp.task('default', ['js', 'serve']);*/