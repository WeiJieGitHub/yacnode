module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "selector-pseudo-class-no-unknown": [true, {
      // css-modules 需要这两个伪类
      "ignorePseudoClasses": ['global', 'local']
    }]
  },
}
