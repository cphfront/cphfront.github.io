var gulp = require('gulp');
var sequence = require('gulp-sequence');
var shell = require('gulp-shell');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');
var htmlmin = require('gulp-htmlmin');

gulp.task('css', function(cb) {
	var processors = [
		autoprefixer({browsers: ['last 4 versions', '> 5%']}),
		csswring
	];
	return gulp.src('_site/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('_site/css'));
});

gulp.task('htmlmin', function(cb) {
	return gulp.src('_site/index.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('_site/'))
});

gulp.task('watch', function(cb) {
	return gulp.src('.', {read: false})
		.pipe(shell([
			'jekyll serve'
		]),
		{verbose: true});
});

gulp.task('jekyll-build', function(cb) {
	return gulp.src('.', {read: false})
		.pipe(shell([
			'jekyll build'
		]),
		{verbose: true});
});

gulp.task('upload', function(cb) {
	return gulp.src('.', {read: false})
		.pipe(shell([
			's3_website push'
		]),
		{verbose: true});
});

gulp.task('build', function(cb) {
	return sequence('jekyll-build', ['css', 'htmlmin'], cb);
});

gulp.task('deploy', function(cb) {
	return sequence('build', ['upload'], cb);
});

gulp.task('default', ['watch'])
