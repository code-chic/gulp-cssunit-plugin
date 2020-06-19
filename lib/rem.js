"use strict";
const tree = require("css-tree");

module.exports = function rem(source, options = {}) {
  if (!source || source === "") {
    return source;
  }

  const htmlSize = options.htmlSize = (options.htmlSize || 1);
  const decimal = options.decimal = (options.decimal || 0);
  const ast = tree.parse(source); // 将 css 代码转成 ast tree 语法
  tree.walk(ast, node => { // 使用 css-tree 提供的内置工具，遍历 ast 节点
    if (node.type === "Dimension" && node.unit === "px") {
      node.value = parseFloat(node.value) / htmlSize; // 计算 rem 值
      node.unit = "rem";
    }
  });

  const result = tree.generate(ast, { sourceMap: true, positions: true });
  return result.css;
};
