exports.config = {
  bundles: [
    { components: ['wu-spinner'] }
  ],
  collections: [
    // { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
