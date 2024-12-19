const github = require('./github')

const policies = [{
  name: 'restrictRepoCreationGitHub',
  description: 'This policy is designed to prevent members of a GitHub organization from creating new repositories. This includes public and private repositories.',
  technicalDetails: 'This policy will set the following values for the organization(`members_allowed_repository_creation_type=none`, `members_can_create_public_repositories=false`, `members_can_create_private_repositories=false`) at the organization level.',
  policy: github.restrictRepoCreationGitHub
}]

module.exports = policies
