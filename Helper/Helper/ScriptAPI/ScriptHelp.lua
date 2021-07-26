---@diagnostic disable: lowercase-global


---推迟一段时间执行函数
---@param func function
---@param msec number
---@return number 如果返回`Null`，则代表创建任务失败
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/ScriptHelp)
---LiteXLoader - 系统功能接口
function setTimeout(func, msec) end

---推迟一段时间执行代码段（eval）  
---@param code string 待执行的代码段
---@param msec number 执行间隔周期（毫秒）
---@return number 此任务ID
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/ScriptHelp)
---LiteXLoader - 系统功能接口
function setTimeout(code, msec) end

---设置周期执行函数
---@param func function 待执行的函数
---@param msec number 执行间隔周期（毫秒）
---@return number 此任务ID
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/ScriptHelp)
---LiteXLoader - 系统功能接口
function setInterval(func, msec) end

---设置周期执行代码段（eval）
---@param code string 待执行的代码段
---@param msec number 执行间隔周期（毫秒）
---@return number 如果返回`Null`，则代表创建任务失败
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/ScriptHelp)
---LiteXLoader - 系统功能接口
function setInterval(code, msec) end

---取消延时/周期执行项  
---@param taskid number
---@return boolean 如果返回`Null`，则代表取消任务失败
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/ScriptHelp)
---LiteXLoader - 系统功能接口
function clearInterval(taskid) end