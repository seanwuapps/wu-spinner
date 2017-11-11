exports.config = {
  namespace: 'wuspinner',
  generateDistribution: true,
  generateWWW: false,
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
