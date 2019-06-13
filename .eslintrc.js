// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'no-debugger': 'error', // 禁止使用 debugger
    'no-console': 'off', // 允许使用 console
    quotes: ['error', 'single'], // 必须使用单引号，禁止使用双引号
    semi: 'off', // 结尾必须没有分号
    eqeqeq: ["error", "always"], // 必须使用 === 或 !==
    'space-before-function-paren': ["error", "never"] // function前不需要加空格
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    swan: true,
    tt: true,
    my: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    mpvue: true,
    mpvuePlatform: true
  }
}
