const concat = require('gulp-concat');
const del = require('del');
const expose = require('gulp-expose');
const gulp = require('gulp');

gulp.task('clean', async function() {
  return del([
    'dist/*'
  ]);
});

gulp.task('dist', gulp.series('clean', async function(){
  return gulp.src('**/*.gs')
      .pipe(concat('S3.js'))
      .pipe(expose('this', 'S3'))
      .pipe(gulp.dest('dist'));
}));