const logger = require('./logger')
const policies = require('./policies')

const listPolicies = () => {
  logger.info('Available policies:')
  policies.forEach((policy) => {
    logger.info(`- ${policy.name}: ${policy.description}`)
  })
}

const applyPolicy = (policyName, githubOrg) => {
  if (!githubOrg) {
    logger.error('GitHub organization is required. Use --github-org or -gho to provide it.', 'error')
    return
  }

  ensureGithubToken()

  const policy = policies.find((policy) => policy.name === policyName)
  if (policy) {
    logger.info(`Applying policy: ${policyName} to GitHub organization: ${githubOrg}`)
    return policy.policy(githubOrg)
  } else {
    logger.info(`Policy '${policyName}' not found. Use --list to see available policies.`, 'error')
  }
}

const ensureGithubToken = () => {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN is required')
  }
}

module.exports = {
  listPolicies,
  applyPolicy,
  logger
}
