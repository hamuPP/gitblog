/**
 * Created by ty on 2016/6/3.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

//创建任务监视common.scss文件
gulp.task("sassT1", function() {
	return gulp.src("./*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./"));
});

gulp.task('watch', function () {
	gulp.watch("./*.scss", ["sassT1"]);
});