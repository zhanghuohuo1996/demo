var gulp=require('gulp');
var spritesmith=require('gulp.spritesmith');
gulp.task('default',function(){
	return gulp.src('images/*.png')
	.pipe(spritesmith({
		imgName:'sprite.png',
		cssName:'css/sprite.css',
		padding:5,
		algorithm:'binary-tree',
		cssTemplate:'css/handlestr.css'
	}))
	.pipe(gulp.dest('dist/'));
});
