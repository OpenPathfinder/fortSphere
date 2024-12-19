const { Command } = require('commander')
const { listPolicies, applyPolicy, log } = require('./utils')
const pkg = require('./package.json')

const command = new Command()

// Version Command
command
  .command('version')
  .description('Display fortSphere version')
  .action(() => {
    log(`fortSphere version: ${pkg.version}`)
    log('IMPORTANT: This is an experimental version of fortSphere', 'warn')
  })

// Policy Management Command
command
  .command('policy')
  .description('Policy management commands')
  .option('-a, --apply <policy>', 'Apply a new policy')
  .option('-l, --list', 'List all policies')
  .option('-gho, --github-org <githubOrg>', 'Specify GitHub organization')
  .action((options) => {
    const { apply, list, githubOrg } = options

    if (list) {
      listPolicies()
    } else if (apply) {
      applyPolicy(apply, githubOrg)
    } else {
      log('Please provide an option. Use --help to see available options.', 'error')
    }
  })

// Parse Command Line Arguments
command.parse(process.argv)
