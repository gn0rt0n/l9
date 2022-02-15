module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        "plugin:vue/vue3-recommended",
        "prettier"
    ],
    rules: {
        'vue/require-prop-types': 'off',
        'no-undef': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/require-default-prop': 'off',
        'vue/valid-v-slot': 'off',
        'vue/no-mutating-props': 'off',
        'vue/no-v-html': 'off',
        'vue/require-explicit-emits': 'off',
}
}
