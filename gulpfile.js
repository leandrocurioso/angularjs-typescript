const path = require('path');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rev = require('gulp-rev');
const order = require("gulp-order");
const sourcemaps = require('gulp-sourcemaps');
const minifyCss = require('gulp-minify-css');
const watch = require('gulp-watch');

const BASE_URL = path.join(__dirname,)
const BASE_URL_PUBLIC = path.join(BASE_URL, "public");

/*
gulp.task('minify-css', () => {
    return gulp.src([
    ])
    .pipe(sourcemaps.init())
    .pipe(minifyCss({
        compatibility: 'ie8'
    }))
    .pipe(concat({
        path: 'bundle.min.css',
        cwd: ''
     }))
    //.pipe(rev())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(BASE_URL));
});
*/

gulp.task('minify-js', () => {
    return gulp.src([
        path.join(BASE_URL, 'dist', 'module', 'app', 'index-bundle.app.js')
    ])
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat({
        path: 'bundle.lib.min.js',
        cwd: ''
    }))
    //.pipe(rev())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(BASE_URL_PUBLIC));
});

gulp.task('watch-minify-js', () => {
    return watch('./dist/module/app/index-bundle.app.js', { ignoreInitial: false, verbose: true }, () => {
        gulp.src([
            path.join(BASE_URL, 'dist', 'module', 'app', 'index-bundle.app.js')
        ])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat({
            path: 'bundle.lib.min.js',
            cwd: ''
        }))
        //.pipe(rev())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(BASE_URL_PUBLIC));
    });
});

gulp.task('minify-all', [
  'minify-js'
  // 'minify-css'
]);

