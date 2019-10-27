module.exports = {
  publishCommand: () => 'echo dummy publish!',
  mergeStrategy: {
    toSameBranch: ['dev'],
    toReleaseBranch: {
      dev: 'master'
    }
  }
}