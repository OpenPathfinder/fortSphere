const pino = require('pino');
const policies = require('./policies')

const logger = pino({
  level: process.env.NODE_ENV === 'test' ? 'silent' : 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

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

  const policy = policies.find((policy) => policy.name === policyName)
  if (policy) {
    logger.info(`Applying policy: ${policyName} to GitHub organization: ${githubOrg}`)
    policy.policy(githubOrg)
  } else {
    logger.info(`Policy '${policyName}' not found. Use --list to see available policies.`, 'error')
  }
}

module.exports = {
  listPolicies,
  applyPolicy,
  logger
}
