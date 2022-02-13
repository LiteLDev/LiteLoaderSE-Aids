---📅 通用日志 API
---@class logger 
 logger = {}

---设置日志是否输出到控制台
---@param isOpen boolean 设置日志是否输出到控制台
---@param logLevel? number （可选参数）控制台的日志输出等级，默认为4
---@return any 
function logger.setConsole(isOpen,logLevel)
end

---设置日志是否输出到文件
---@param filepath string 设置日志输出到的文件路径
---@param logLevel? number （可选参数）文件的最小日志输出等级，默认为4
---@return any 
function logger.setFile(filepath,logLevel)
end

---设置日志是否输出到某个玩家
---@param player Player 设置日志输出到的目标玩家对象
---@param logLevel? number 玩家的最小日志输出等级，默认为4
---@return any 
function logger.setPlayer(player,logLevel)
end

---输出普通文本
---@vararg any
---@return any 
function logger.log(...)
end

--- 输出调试信息
---@vararg any
---@return any 
function logger.debug(...)
end

--- 输出提示信息
---@vararg any
---@return any 
function logger.info(...)
end

---输出警告信息
---@vararg any
---@return any 
function logger.warn(...)
end

---输出错误信息
---@vararg any
---@return any 
function logger.error(...)
end

--- 输出严重错误信息
---@vararg any
---@return any 
function logger.fatal(...)
end

---设置自定义日志消息标头
---@param title  string 设置的自定义标头
---@return any 
function logger.setTitle(title )
end

---统一修改日志输出等级
---@param level number 日志输出等级
---@return any 
function logger.setLogLevel(level)
end