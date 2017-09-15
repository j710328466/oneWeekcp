const gulp = require('gulp')
      , lp = require('gulp-load-plugins')() //改变前缀
      , concat = lp.concat
      , minifyCSS = lp.minifyCss //css压缩
      , minify = lp.minify
      , zip = lp.zip //解压
      , moment = lp.moment
      , runSequence = lp.runSequence
      , uglify = lp.uglify
      , htmlmin = lp.htmlmin
      , autoPrefixer = lp.autoprefixer
      , imagemin = lp.imagemin
      , inject = lp.inject

gulp.task('testHtml', function() {
  var options = {
    removeComments: true,  //清除注释
    collapseWhitespace: false,  //压缩html
    collapseBooleanAttributes: true, //省略布尔属性的值
    removeEmptyAttributes: true,  //删除所有空格作为属性值
    removeScriptTypeAttributes: true,  //删除script的type属性
    removeStyleLinkTypeAttributes: true,  //删除style的type属性
    minifyJS: true,  //压缩js
    minifyCSS: true  //压缩css
  }
  gulp.src('src/*.html')
   .pipe(htmlmin(options))
    .pipe(gulp.dest('dist'))
})
// 压缩js
gulp.task('compress', function(cb) {
  gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js'))
})
// 压缩css,加前缀
gulp.task('minify-css', function() {
  var opt = {
    keepSpecialComments: "*",
    keepBreaks: false,
    removeEmpty: false
  }
  gulp.src('./src/css/*.css')
    .pipe(autoPrefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    //  .pipe(minifyCSS(opt))
      .pipe(gulp.dest('dist/css'))
})
// 检测
gulp.task('checkout', function() {
  var gitTag = argv.tag

  git.checkout(gitTag, function(err) {
    if (err) throw err
  })
})
// 压缩包
gulp.task('zip', () => {
  gulp.src('src/*')
   .pipe(zip('zipName.zip'))
    .pipe(gulp.dest('dist'))
})
// // 补充前缀
// gulp.task('autoPrefixer' , () => {
//   gulp.src('css/*.css')
//    .pipe(autoPrefixer({
//      browsers: ['last 2 versions'],
//      cascade: false
//    }))
//     .pipe(gulp.dest('dist'))
// })
// 图片压缩
gulp.task('testImagemin', function() {
  // 将你默认的任务代码放在这
  gulp.src('src/img/*.{png,jpg,jpeg,gif,ico}')
   .pipe(imagemin())
   .pipe(gulp.dest('dist/img'))
})
// 文件路径
gulp.task('inject', function() {
  var target = gulp.src('./src/*.html')
   pipe(inject(gulp))
})
gulp.task('default', ['testHtml', 'compress', 'minify-css', 'testImagemin'])
