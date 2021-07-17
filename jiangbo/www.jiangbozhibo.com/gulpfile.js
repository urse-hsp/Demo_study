// const gulp = require('gulp')
const { src, dest, series, watch, parallel } = require("gulp");

// npm install --save-dev gulp-uglify gulp-rename
const uglify = require("gulp-uglify"); // 压缩混淆
const rename = require("gulp-rename"); // 更改名字

// npm install --save-dev gulp-babel @babel/core @babel/preset-env
const babel = require("gulp-babel");
const csso = require("gulp-csso");
const imagemin = require("gulp-imagemin");
// const htmlminify = require("gulp-html-minify");

const css = function () {
  return src(["./css/*.css", "!./css/*min.css"])
    .pipe(csso())
    .pipe(dest("dist/css"));
};

const cssMin = function () {
  return src("./css/*min.css").pipe(dest("dist/css"));
};

const img = function () {
  return src("./images/*").pipe(imagemin()).pipe(dest("dist/images"));
};

const ico = function () {
  return src("./*.ico").pipe(imagemin()).pipe(dest("dist/"));
};

const html = function () {
  return (
    src("./*.html")
      // .pipe(htmlminify())
      .pipe(dest("dist/"))
  );
};

const js = function () {
  return (
    src(["./js/*.js", "!./js/*.min.js"])
      .pipe(babel({ presets: ["@babel/env"] }))
      // 压缩js
      .pipe(uglify())
      // .pipe(rename({extname: '.min.js'}))
      // 吧源文件，改为 '.min.js' 移到到 dist
      .pipe(dest("dist/js"))
  );
};

const minJs = function () {
  return src(["./js/*.min.js"]).pipe(dest("dist/js"));
};

const components = function () {
  return (
    src(["./*.js", "!gulpfile.js"])
      .pipe(babel({ presets: ["@babel/env"] }))
      // 压缩js
      .pipe(uglify())
      // 吧源文件，改为 '.min.js' 移到到 dist
      // .pipe(rename({extname: '.min.js'}))
      .pipe(dest("dist/"))
  );
};

function aa() {
  watch(
    ["./js/*.js", "./css/*.css", "./*.html"],
    {
      ignoreInitial: false,
    },
    series(css, cssMin, img, html, js, minJs, ico, components)
  );
}

exports.default = aa;
