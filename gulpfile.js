/**
 * Created by magnus on 21/01/16.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var imageMin = require('gulp-imagemin');
var less = require('gulp-less');

gulp.task('images', function(){
    gulp.src(['src/img/**.*'])
        .pipe(imageMin())
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream());
})
// Þetta þarf að tengja við ts.
gulp.task('scripts', function(){
    gulp.src(['built/*.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.stream());
});

gulp.task('styles', function() {
    gulp.src('src/styles/**/main.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/styles'))
        .pipe(browserSync.stream());
});

gulp.task('default', function(){
    browserSync.init({
        server: './'
    });

//    gulp.watch('src/**/*', browserSync.reload);
    gulp.watch('src/styles/**/*.less', ['styles']);
    gulp.watch('src/img/**/*', ['images']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('built/*.js', ['scripts']);
});

