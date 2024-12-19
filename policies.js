const policies = [{
  name: 'enforceMFAGithub',
  description: 'Enforce MFA on Github',
  policy: (org) => {
    console.log(`Enforcing MFA on Github org (${org})`)
  }
}]

module.exports = policies
