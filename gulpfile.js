var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
	htmlclean = require('gulp-htmlclean');
	concat = require('gulp-concat');
//JS压缩
gulp.task('uglify', async function() {
    return gulp.src(['./public/js/**/.js','!./public/js/**/*min.js'])//只是排除min.js文件还是不严谨，一般不会有问题，根据自己博客的修改我的修改为return gulp.src(['./public/**/*.js','!./public/zuoxi/**/*.js',,'!./public/radio/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));//对应修改为./public即可
});
// 合并 JS
gulp.task('jsall', async function () {
    return gulp.src('./public/**/*.js')
    // 压缩后重命名
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public'));
});
//CSS压缩
gulp.task('cssmin', function() {
    return gulp.src(['./public/css/main.css','!./public/css/*min.css'])   
        .pipe(cssmin())
        .pipe(gulp.dest('./public/css/'));
});
//图片压缩
gulp.task('images', async function() {
    gulp.src('./public/uploads/*.*')
        .pipe(imagemin({
            progressive: false
        }))
        .pipe(gulp.dest('./public/uploads/'));
});
// 压缩 public 目录 html文件 public/**/*.hmtl 表示public下所有文件夹中html，包括当前目录
    gulp.task('minify-html', function() {
      return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
             removeComments: true,
             minifyJS: true,
             minifyCSS: true,
             minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
    });
gulp.task('build', gulp.series('uglify', 'jsall','images', 'minify-html', async function() {
    // Do something after a, b, and c are finished.
}))