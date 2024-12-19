const { Octokit } = require('octokit')
const logger = require('./logger')

const restrictRepoCreationGitHub = async (orgName) => {
  // @TODO: Implement the logic to support internal repositories (members_can_create_internal_repositories=false)
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
  const validateState = (data) => {
    const checks = [
      // legacy
      data.members_allowed_repository_creation_type === 'none',
      // new
      data.members_can_create_public_repositories === false,
      data.members_can_create_private_repositories === false
    ]
    return checks.every(item => item)
  }

  logger.info(`Checking the state of the organization: ${orgName}`)
  const data = await octokit.rest.orgs.get({
    org: orgName
  })
  if (validateState(data.data)) {
    logger.info(`Organization ${orgName} is already in the desired state. No action required, exiting...`)
    return
  }

  logger.info(`Updating the organization: ${orgName}`)
  const response = await octokit.rest.orgs.update({
    org: orgName,
    members_allowed_repository_creation_type: 'none',
    members_can_create_public_repositories: false,
    members_can_create_private_repositories: false
  })
  logger.info(`Checking the state of the organization: ${orgName}`)
  if (!validateState(response.data)) {
    throw new Error(`Failed to update the organization ${orgName}`)
  }

  logger.info(`Organization ${orgName} updated successfully`)
  return response.data
}

module.exports = {
  restrictRepoCreationGitHub
}
