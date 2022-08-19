'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('          Yassir Rajouani'),
  handle: chalk.white('yassiraj'),
  shorthandle: chalk.white('yar'),
  work: chalk.white('Frontend developer at 1minScript'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('bitandbang'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~yar'),
  gitlab: chalk.gray('https://gitlab.com/') + chalk.green('yassir128'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('yassirrajouani'),
  npx: chalk.red('npx') + ' ' + chalk.white('yassiraj'),
  labelWork: chalk.white.bold('    Work:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  Gitlab:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
