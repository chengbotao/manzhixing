/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
const { series, src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(dest('./dist'));
}

exports.default = series(compile);
