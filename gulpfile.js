
var projectURL  = 'http://192.168.1.44/path/to/folder'; // Local project URL 
var phpFiles = './**/*.php'; // Path to all PHP files.

var gulp         = require('gulp'), // Gulp of-course
    babel 		   = require("gulp-babel"),
    sass         = require('gulp-sass'), // Gulp pluign for Sass compilation.
    cssmin       = require('gulp-cssmin'),
    rename       = require('gulp-rename'), // Renames files E.g. style.css -> style.min.css
    prefix       = require('gulp-autoprefixer'), // Autoprefixing magic.
    uglify       = require('gulp-uglify'), // Minifies JS files
    concat       = require('gulp-concat'), // Concatenates JS files
    imagemin    = require('gulp-imagemin'),
    browserSync  = require('browser-sync').create(); // Reloads browser and injects CSS

gulp.task( 'browser-sync', function() {
  browserSync.init( {
    proxy: projectURL,
    open: true,
    injectChanges: true,
  });

  gulp.watch( phpFiles, browserSync.reload ); // Reload on PHP file changes.
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

// Configure CSS tasks.
gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// Configure JS.
gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
	.pipe(babel())
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

// Configure image stuff.
gulp.task('images', function () {
  return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task( 'watch', function () {
  gulp.watch( phpFiles, browserSync.reload ); // Reload on PHP file changes.
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'js', 'images', 'browser-sync']);