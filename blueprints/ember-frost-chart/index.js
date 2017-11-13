module.exports = {
  description: '',
  normalizeEntityName: function () {},

  afterInstall: function () {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-frost-core', target: '1.23.10'}
      ]
    })
  }
}
