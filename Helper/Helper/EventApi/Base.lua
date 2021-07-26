---@alias baseEvent
---|>'"onFireSpread"'   # --- '火焰蔓延'
---| '"onServerStarted"'   # --- '服务器启动完毕'
---| '"onConsoleCmd"'   # --- '服务端执行后台命令'
---| '"oonConsoleOutput"'   # --- '控制台产生命令输出'

---新增监听器
---
---火焰蔓延
---@param event baseEvent 要监听的事件名
---@param callback fun(pos : IntPos) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/EntityEvents)
---LiteXLoader 其他事件相关
function mc.listen(event,callback) end

---新增监听器
---
---服务器启动完毕
---@param event baseEvent 要监听的事件名
---@param callback fun() 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/EntityEvents)
---LiteXLoader 其他事件相关
function mc.listen(event,callback) end

---新增监听器
---
---服务端执行后台命令
---@param event baseEvent 要监听的事件名
---@param callback fun(cmd : string) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/EntityEvents)
---LiteXLoader 其他事件相关
function mc.listen(event,callback) end

---新增监听器
---
--- 控制台产生命令输出
---@param event baseEvent 要监听的事件名
---@param callback fun(cmd : string) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/EntityEvents)
---LiteXLoader 其他事件相关
function mc.listen(event,callback) end