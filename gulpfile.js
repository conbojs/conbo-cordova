var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish')
	;

var src = 'src/**/*.js';

gulp.task('lint', function() 
{
	return gulp
		.src(src)
		.pipe(jshint({laxbreak:true, laxcomma:true, laxbreak:true, expr:true}))
		.pipe(jshint.reporter('jshint-stylish', {verbose:true}))  
		;
});

gulp.task('dev', function()
{
	return gulp
		.src(src)
		.pipe(concat('conbo-cordova.js'))
		.pipe(gulp.dest('build'))
		;
});

gulp.task('prod', function()
{
	return gulp
		.src(src)
		.pipe(uglify())
		.pipe(concat('conbo-cordova.min.js'))
		.pipe(gulp.dest('build'))
		;
});

gulp.task('js', ['lint', 'dev', 'prod']);

gulp.task('watch', function() 
{
	gulp.watch('src', ['js']);
});

gulp.task('default', ['js']);
