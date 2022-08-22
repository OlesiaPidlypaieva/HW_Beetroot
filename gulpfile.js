const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
   return gulp.src('HW_13/assets/scss/**/*.scss', "!" + "HW_13/assets/scss/**/_*.scss")
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('HW_13/crs/css'));
};


function watchFiles() {
   gulp.watch ('HW_*/assets/scss/**/*.scss', buildStyles)
}

let build = gulp.series(gulp.parallel(buildStyles));
let watch = gulp.parallel(build, watchFiles);

exports.buildStyles = buildStyles;
exports.default = watch;
exports.build = build;