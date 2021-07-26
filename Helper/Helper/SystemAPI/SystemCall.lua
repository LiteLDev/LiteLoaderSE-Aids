
---调用shell执行指定系统命令
---@param cmd string 请求的目标地址
---@param callback function 当请求返回时执行的回调函数
--- 
--- ```
--- function(exitcode,output)
--- exitcode : Number
--- --进程退出码
--- output : string 
--- --进程标准输出和标准错误输出的内容
--- ```
---
---@param timeLimit number （可选参数）运行命令进程运行的最长时间，单位为毫秒。默认为`-1`，即不限制最长运行时间
---@return boolean 是否成功启动命令
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/SystemCall)
---LiteXLoader - 系统功能接口
function system.cmd(cmd,callback,timeLimit) end

