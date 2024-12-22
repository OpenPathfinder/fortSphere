const policies = require('../lib/policies')
const { writeFileSync } = require('fs')
const { join } = require('path')

const data = policies.map(policy => {
  return {
    name: policy.name,
    description: policy.description,
    technicalDetails: policy.technicalDetails
  }
})

writeFileSync(join(process.cwd(), '/output/policies.json'), JSON.stringify(data, null, 2))
