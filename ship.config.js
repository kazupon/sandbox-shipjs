module.exports = {
  //conventionalChangelogArgs: '-i CHANGELOG.md -s -n ./node_modules/git-commit-message-convention/convention.js',
  formatCommitMessage: ({ version, mergeStrategy, baseBranch }) =>
    mergeStrategy.toSameBranch.includes(baseBranch)
      ? `:package: release: v${version}`
      : `:pencil: docs: prepare v${version}`,
  formatPullRequestTitle: ({ version }) => `:package: release: v${version}`,
  publishCommand: () => 'echo dummy publish!',
  mergeStrategy: {
    toSameBranch: ['legacy'],
    toReleaseBranch: {
      dev: 'master'
    }
  }
}