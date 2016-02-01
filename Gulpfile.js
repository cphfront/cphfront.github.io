var gulp = require('gulp');
var sequence = require('gulp-sequence');

var shell = require('gulp-shell');

gulp.task('watch', function(cb) {
	gulp.src('.', {read: false})
		.pipe(shell([
			'jekyll serve'
		]),
		{verbose: true});
});

gulp.task('build', function(cb) {
	gulp.src('.', {read: false})
		.pipe(shell([
			'jekyll build'
		]),
		{verbose: true});
});

gulp.task('upload', function(cb) {
	gulp.src('.', {read: false})
		.pipe(shell([
			's3_website push'
		]),
		{verbose: true});
});

gulp.task('deploy', function(cb) {
	sequence(['build', 'upload'], cb);
});

gulp.task('default', ['watch'])
