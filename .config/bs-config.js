const ssi = require('browsersync-ssi');

module.exports = {
  server: './dist/',
  files: ['./dist/**/*', './**/*.php'],
  watch: true,
  middleware: ssi({
    baseDir: "./dist",
    ext: ".html"
  })
}
