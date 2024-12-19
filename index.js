const { Command } = require('commander')
const pkg = require('./package.json')

const command = new Command()

command
  .command('version')
  .description('fortSphere version')
  .action(() => {
    console.log(`fortSphere version: ${pkg.version}`)
    console.warn('IMPORTANT: This is an experimental version of fortSphere')
  })

command.parse(process.argv)
