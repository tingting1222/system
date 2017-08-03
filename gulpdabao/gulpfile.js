var gulp=require('gulp'),
    minify=require('gulp-clean-css'),
    imagemin=require('gulp-imagemin'),
    htmlmin=require('gulp-htmlmin');
//压缩 css
gulp.task('zip',function () {

    gulp.src('css/!*.css')
        .pipe(minify())
        .pipe(gulp.dest('./css'))
});

//压缩 img
gulp.task('zip',function () {

    gulp.src('images/!*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('./images'))
});

//压缩 html
var options={
  removeComments:true,//清除注释
  collapseWhitespace:true,//压缩 html
  collapseBooleanAttributes:true,//清除含有布尔属性
  removeScriptTypeAttributes:true,//清除 script 中 type=text/javascript
  removeStyleLinkTypeAttributes:true,//清除 style或 link 中 type=text/CSS
  removeEmptyAttributes:true,//删除所有空格作属性值
  minifyCSS:true,//压缩页面CSS
  minifyJS :true//压缩页面js

};
gulp.task('zip',function () {

    gulp.src('./index.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./'))
});

gulp.task('default',['zip']);