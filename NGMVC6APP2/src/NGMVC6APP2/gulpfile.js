/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task('default', function () {
    return gulp.watch("wwwroot/js/**/*.js", ["concat"]);
});

gulp.task("concat", function () {
    return gulp.src(["wwwroot/js/controllers.js", "wwwroot/js/app.js"])
        .pipe(concat("bundle.js"))
    .pipe(gulp.dest("wwwroot/"));
});