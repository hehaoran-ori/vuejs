module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/prettier' // 替换为安装的 `prettier`
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        // 'quotes': ['error', 'single'] // 启用单引号
    }
};
