'strict use'
const PkgDir = require('pkg-dir')
const Path = require('path')
const Log4JS = require('log4js')

/**
 * Common functionality class
 */
class Common {
  /**
   * Common's constructors
   */
  constructor() {
    this._config = {}
    this.defaultLg4JSConfiguration = {
      appenders: { mainConsole: { type: 'console' } },
      categories: { default: { appenders: ['mainConsole'], level: 'debug' } },
    }
    this.logger = this.getLog4JSLogger(module.filename)
  }

  /**
   * Configuration getter
   */
  get configuration() {
    return this._config
  }

  /**
   * Initialization function.
   * @param {object} config - Configuration to initialize Common.
   */
  initialize(config = { logging: this.defaultLg4JSConfiguration }) {
    return new Promise((resolve, reject) => {
      try {
        if (config.logging) {
          this.initializeLogging(config.logging).then(() => {
            resolve()
          })
        } else {
          this.initializeLogging().then(() => {
            resolve()
          })
        }
      } catch (err) {
        reject(err)
      }
    })
  }

  /**
   * Initiailizes log4js
   * @param {*} configuration - Valid log4js configuration
   */
  initializeLogging(configuration = this.defaultLg4JSConfiguration) {
    return new Promise((resolve, reject) => {
      try {
        Log4JS.configure(configuration)
        this.logger.info('Logging initialized.')
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  }

  /**
   * Gets logger given a module filename
   * @param {*} moduleFilename - module filename
   */
  getLog4JSLogger(moduleFilename) {
    const packageRoot = PkgDir.sync(Path.dirname(moduleFilename))
    const packageInfo = this.getPackageInfo(moduleFilename)
    return Log4JS.getLogger(
      `${packageInfo.name}-${packageInfo.version}/${Path.relative(
        packageRoot,
        moduleFilename
      )}`
    )
  }

  /**
   * Get package info for a given module filename
   * @param {*} moduleFileName - module filename
   */
  getPackageInfo(moduleFileName) {
    const packageRoot = PkgDir.sync(Path.dirname(moduleFileName))
    const packageFilename = Path.join(packageRoot, 'package.json')
    return require(packageFilename)
  }

  /**
   * Deep copy a value
   * @param {deep} value - value to clone
   */
  clone(value) {
    return JSON.parse(JSON.stringify(value))
  }
}
const common = new Common()
module.exports = common
