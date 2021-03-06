/* eslint-env node */
'use strict'

module.exports = {
  name: 'ember-frost-chart',

  included: function (app) {
    this._super.included(app)
  },

  init: function (app) {
    this.options = this.options || {}
    this.options.babel = this.options.babel || {}
    this.options.babel.optional = this.options.babel.optional || []

    if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
      this.options.babel.optional.push('es7.decorators')
    }
    // eslint-disable-next-line no-unused-expressions
    this._super.init && this._super.init.apply(this, arguments)
  }
}
