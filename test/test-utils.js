const { spawnSync } = require('child_process')

const _runCli = ( command) =>{
    return spawnSync('node', ['../pizza/bin/index',...command], { encoding: 'utf-8' })
  }

  function createCLIWrapper () {
    return {
      run: _runCli
    }
  }

module.exports = {
    createCLIWrapper
}
