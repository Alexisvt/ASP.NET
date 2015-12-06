/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var gutil = require("gulp-util");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("default", function () {
    // place code for your default task here
    return gutil.log("Gulp is running");
});

//gulp.task("concat", function() {
//    return gulp.src("wwwroot/js/**/*.js")
//        .pipe(concat("bundle.js"))
//    .pipe(gulp.dest("wwwroot/"));
//});


gulp.task("concat", function () {
    return gulp.src(["wwwroot/js/interfaces.js", "wwwroot/js/classes.js", "wwwroot/js/app.js"])
        .pipe(concat("bundle.js"))
    .pipe(gulp.dest("wwwroot/"));
});

gulp.task("watch", function() {
    return gulp.watch("wwwroot/js/**/*.js", ["concat"]);
})