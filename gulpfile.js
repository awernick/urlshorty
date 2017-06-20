let gulp = require('gulp');
let clean = require('gulp-clean');
let ts = require('gulp-typescript');
let tsProject = ts.createProject('tsconfig.json');
let tsConfig = require('./tsconfig.json')

let sourceFiles = tsConfig.include; 
let outDir = tsConfig.compilerOptions.outDir;

gulp.task('compile', function() {
  return tsProject.src() 
    .pipe(tsProject())
    .js.pipe(gulp.dest(outDir));
})

gulp.task('clean', function() {
  return gulp.src(outDir, { read: false })
    .pipe(clean());
})

gulp.task('watch', function() {
  gulp.watch(sourceFiles, ['compile']);
})

