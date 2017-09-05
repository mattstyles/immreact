
import pkg from '../package.json'
import {commands} from '../lib/constants'

export default () => `
  Usage

    $ ${pkg.name} [command] [options]

  Commands

    ${commands.install}   Scaffolds new raid application

  Arguments

    -h --help             Display contextual help for ${pkg.name} instructions
    -v --version          Display current locally installed version
`
