const policies = require('./policies')

const listPolicies = () => {
  log('Available policies:')
  policies.forEach((policy) => {
    console.log(`- ${policy.name}: ${policy.description}`)
  })
}

const applyPolicy = (policyName, githubOrg) => {
  if (!githubOrg) {
    log('GitHub organization is required. Use --github-org or -gho to provide it.', 'error')
    return
  }

  const policy = policies.find((policy) => policy.name === policyName)
  if (policy) {
    log(`Applying policy: ${policyName} to GitHub organization: ${githubOrg}`)
    policy.policy(githubOrg)
  } else {
    log(`Policy '${policyName}' not found. Use --list to see available policies.`, 'error')
  }
}

const log = (message, type = 'info') => {
  const prefix = type === 'warn' ? '[WARNING]' : type === 'error' ? '[ERROR]' : '[INFO]'
  console.log(`${prefix} ${message}`)
}

module.exports = {
  listPolicies,
  applyPolicy,
  log
}
