module.exports = {
  '*.{js,ts,vue}': ['eslint', 'vitest --run'],
  '*.{ts,vue}': [() => 'tsc --noEmit'],
  '*.{css,scss,vue}': 'stylelint'
};
