-- LiteXLoader Command Helper

---@class mc
mc = {}

---执行一条后台命令
---@param cmd string 待执行的命令
---@return boolean 是否执行成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Command)
---LiteXLoader 命令相关
function mc.runcmd(cmd) end

---执行一条后台命令（强化版）
---@param cmd string 待执行的命令
---@return ResTable 命令执行结果
-- - 对于返回的某个执行结果对象res,有如下成员：  
---
--- ```
--- res.success -> boolean --是否执行成功
--- res.output -> string --BDS执行命令后的输出结果
--- ```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Command)
--- | LiteXLoader 命令相关
function mc.runcmdEx(cmd) end






---注册一个新的玩家命令
---@param cmd string 待注册的命令
---@param description string 命令描述文本
---@param callback fun(player:Player,table:table) 接口自动调用的回调函数
--- 
--- ```
--- function(player,args)
--- player : Player 
--- --执行命令的玩家对象
--- args : table<String,String...> 
--- --目标命令后面的参数,按空格为分界分割，组成字符串数组
--- ```
---
---@param level? levelmode 命令的注册等级，默认为 0
---@return boolean 是否成功注册
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Command)
--- | LiteXLoader 命令相关
function mc.regPlayerCmd(cmd,description,callback,level)
end


---注册一个新的后台控制台命令
---@param cmd string 待注册的命令
---@param description string 命令描述文本
---@param callback fun(table:table) 接口自动调用的回调函数
---
--- ```
--- function(args)
--- args : table<String,String...> 
--- --目标命令后面的参数,按空格为分界分割，组成字符串数组
--- ```
---
---@return boolean 是否成功注册
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Command)
--- | LiteXLoader 命令相关
function mc.regConsoleCmd(cmd,description,callback) end

---模拟产生一个控制台命令输出
---@param output string 模拟产生的命令输出
---@return boolean 是否成功执行
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Command)
---LiteXLoader 命令相关
function mc.sendCmdOutput(output) end

