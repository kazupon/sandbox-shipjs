module.exports = {
  publishCommand: () => 'echo dummy publish!',
  mergeStrategy: {
    toSameBranch: ['legacy'],
    toReleaseBranch: {
      dev: 'master'
    }
  }
}