const through = require("through2");
const util = require("gulp-util");
const rem = require("./lib/rem");
const name = require("./package.json").name;

module.exports = function unitByCss(options) {
  options = options || {};
  return through.obj(function(file, enc, cb) {
    if (file.isStream()) {
      this.emit("error", new util.PluginError(name, "Streams are not supported!"));
      cb();
    } else if (file.isBuffer()) {
      const content = file.contents.toString();
      file.contents = Buffer.from(rem(content, options));
      this.push(file);
      cb();
    }
  });
}
