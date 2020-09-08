import { createCli } from 'clibuilder'
import { CLI_NAME, VERSION, DESCRIPTION } from './pkg'

export const cli = createCli({
  name: CLI_NAME,
  version: VERSION,
  description: DESCRIPTION,
  run(args) {
    this.ui.info(args)
  }
})
