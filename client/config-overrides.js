const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@font-family': `'Noto Sans', sans-serif`,
      '@primary-color': '#BF616A',
      '@success-color': '#A3BE8C',
      '@error-color': '#BF616A',
      '@info-color': '#5E81AC',
      '@black': '#2E3440',
      '@white': '#ECEFF4',
      '@body-background': '#ECEFF4',
    },
  }),
)
