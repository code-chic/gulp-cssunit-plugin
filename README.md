# gulp-cssunit-plugin

**`gulp-cssunit-plugin`**是css单位转换插件，可以将`px`转成`rem`的工具

**安装**
```shell script
# 使用 npm
npm install gulp-cssunit-plugin --save-dev --registry=http://localhost:4873
# 或者 yarn
yarn add gulp-cssunit-plugin --registry=http://localhost:4873
```
**可选项**
* `htmlSize` 根字体大小，计算方式：实际像素/htmlSize = rem

**使用示例**
```javascript
const cssunit = require("gulp-cssunit-plugin");
gulp.task("xxx", function value() {
    return gulp.src("demo.css").pipe(cssunit({
        htmlSize: 37.5
    }));
});
```
