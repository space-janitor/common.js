'use strict'
const Common = require('../src/index')
const OS = require('os')
const logger = Common.getLog4JSLogger(module.filename)
try {
  Common.initializeLogging()
    .then(() => {
      const packageInfo = Common.getPackageInfo(module.filename)
      logger.info(`packageInfo.name: ${packageInfo.name}`)
      logger.info(`packageInfo.version: ${packageInfo.version}`)
      logger.info(`OS.platform: ${OS.platform()}`)
      logger.info(`OS.arch: ${OS.arch()}`)
      logger.info(`OS.userInfo: ${JSON.stringify(OS.userInfo(), null, 2)}`)
    })
    .catch((err) => {
      logger.error(err)
    })
} catch (ex) {
  console.error(ex)
}
