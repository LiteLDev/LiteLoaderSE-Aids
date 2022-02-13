/**
 * 📅 通用日志 API
 */ 
class logger {
  
  
  


/**
 * 设置日志是否输出到控制台
 * @param {boolean} isOpen 设置日志是否输出到控制台
 * @param {number} logLevel? （可选参数）控制台的日志输出等级，默认为4
 * @returns {any} 
 */
 static setConsole(isOpen,logLevel)

/**
 * 设置日志是否输出到文件
 * @param {string} filepath 设置日志输出到的文件路径
 * @param {number} logLevel? （可选参数）文件的最小日志输出等级，默认为4
 * @returns {any} 
 */
 static setFile(filepath,logLevel)

/**
 * 设置日志是否输出到某个玩家
 * @param {Player} player 设置日志输出到的目标玩家对象
 * @param {number} logLevel? 玩家的最小日志输出等级，默认为4
 * @returns {any} 
 */
 static setPlayer(player,logLevel)

/**
 * 输出普通文本
 * @param {...any} data 待输出的变量或者数据
 * @returns {any} 
 */
 static log(...)

/**
 *  输出调试信息
 * @param {...any} data 待输出的变量或者数据
 * @returns {any} 
 */
 static debug(...)

/**
 *  输出提示信息
 * @param {...any} data 待输出的变量或者数据
 * @returns {any} 
 */
 static info(...)

/**
 * 输出警告信息
 * @param {...any} data 待输出的变量或者数据
 * @returns {any} 
 */
 static warn(...)

/**
 * 输出错误信息
 * @param {...any} data 待输出的变量或者数据
 * @returns {any} 
 */
 static error(...)

/**
 *  输出严重错误信息
 * @param {...any} data 待输出的变量或者数据
 * @returns {any} 
 */
 static fatal(...)

/**
 * 设置自定义日志消息标头
 * @param {string} title  设置的自定义标头
 * @returns {any} 
 */
 static setTitle(title )

/**
 * 统一修改日志输出等级
 * @param {number} level 日志输出等级
 * @returns {any} 
 */
 static setLogLevel(level)  



}
