const { override, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
  addDecoratorsLegacy()
  // 其他自定义配置...
);