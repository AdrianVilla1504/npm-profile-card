/* eslint-disable spaced-comment */
import chalk from 'chalk'
import boxen from 'boxen'

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.white('           ADRIAN VILLA'),
  handle: chalk.white('@AdrianVilla1504'),
  shorthandle: chalk.white('AdrianDev'),
  work: chalk.white('Full Stack Developer'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('Adrin68633421'),
  github: chalk.gray('https://github.com/') + chalk.green('AdrianVilla1504'),
  linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.blue('adrian-villa-776783175'),
  npx: chalk.red('npx') + ' ' + chalk.white('adrian-villa-dev-card'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}
// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
//const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               //webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

console.log(chalk.green(boxen(output, options)))
