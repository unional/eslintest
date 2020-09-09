import { createCliArgv } from 'clibuilder'
import { cli } from './cli'
import { CLI_NAME } from './pkg'

describe('sensible defaults', () => {
  test.skip('todo', async () => {
    await cli.parse(createCliArgv(CLI_NAME))
  })
})

// test('--show-config', async () => {
//   const { argv, ui } = testCli(cli, ['--show-config'])

//   await cli.parse(argv)
//   generateDisplayedMessage(ui.infoLogs)
// })
