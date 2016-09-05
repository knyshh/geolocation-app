var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


/*gulp.task('sass', function () {
    return gulp.src('src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
});*/

/*gulp.task('scripts', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './src/js/script.js',
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [[babelify, {presets: ["es2015"]}]]
  });

  return b.bundle()
    .pipe(source('script.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js/'));
});*/

gulp.task('server', function () {
    browserSync.init({
        port: 8000,
        server: {
            baseDir: './'
        }
    });

    //gulp.watch("src/sass/**/*.scss", ['sass']);
   // gulp.watch("src/js/*.js", ['scripts'])
    gulp.watch("index.html").on('change', browserSync.reload);
});


/*gulp.task('watch', ['scripts'], function () {
    gulp.watch(
        'src/js/script.js',
       // 'src/sass/**///*.scss'
    //).on('change', browserSync.reload);
//});


gulp.task('default', ['server']);
