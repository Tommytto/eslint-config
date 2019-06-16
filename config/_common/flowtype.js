module.exports = {
    plugins: ['flowtype'],
    rules: {
        'flowtype/boolean-style': [2, 'boolean'],
        'flowtype/define-flow-type': 2,
        'flowtype/generic-spacing': [2, 'never'],
        'flowtype/no-types-missing-file-annotation': 2,
        'flowtype/space-after-type-colon': [2, 'always'],
        'flowtype/space-before-generic-bracket': [2, 'never'],
        'flowtype/space-before-type-colon': [2, 'never'],
        'flowtype/union-intersection-spacing': [2, 'always'],
        'flowtype/use-flow-type': 2,
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: false,
        },
    },
};
