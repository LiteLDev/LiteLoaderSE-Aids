---@alias logLevel
---|>'0'   # --- '不输出任何日志'
---| '1'   # --- '仅输出 严重错误信息'
---| '2'   # --- '输出 严重错误、错误信息'
---| '3'   # --- '输出 严重错误、错误、警告信息'
---| '4'   # --- '输出 严重错误、错误、警告、提示信息'
---| '5'   # --- '输出 严重错误、错误、警告、提示 和 调试信息'

---日志对象
---@class logger
logger = {}

---设置日志是否输出到控制台
---@param isOpen boolean 设置日志是否输出到控制台
---@param logLevel number （可选参数）控制台的日志输出等级，默认为`4`
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/Logger)
---LiteXLoader - 脚本辅助接口文档
function logger.setConsole(isOpen, logLevel) end

---设置日志是否输出到文件
---@param filepath string 设置日志输出到的文件路径。如果传入空字符串或者`Null`，则代表关闭到文件的输出。
---@param logLevel number （可选参数）文件的最小日志输出等级，默认为`4`
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/Logger)
---LiteXLoader - 脚本辅助接口文档
function logger.setFile(filepath, logLevel) end

---设置日志是否输出到某个玩家
---@param player Player 设置日志输出到的目标玩家对象。如果传入`Null`，则代表关闭到玩家的输出。
---@param logLevel number 可选参数）玩家的最小日志输出等级，默认为`4`  
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/Logger)
---LiteXLoader - 脚本辅助接口文档
function logger.setPlayer(player, logLevel) end

---输出日志函数
function logger.log(data1,data2,...) end
function logger.debug(data1,data2,...) end
function logger.info(data1,data2,...) end
function logger.warn(data1,data2,...) end
function logger.error(data1,data2,...) end
function logger.fatal(data1,data2,...) end

---向指定文件写入内容
---@param title string 设置的自定义标头
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/Logger)
---LiteXLoader - 脚本辅助接口文档
function logger.setTitle(title) end

---向指定文件写入内容
---@param level logLevel
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/Logger)
---LiteXLoader - 脚本辅助接口文档
function logger.setLogLevel(level) end