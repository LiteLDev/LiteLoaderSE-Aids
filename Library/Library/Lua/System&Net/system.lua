---📡 系统调用 API
这些API提供了执行一些系统调用的接口
---@class system 
 system = {}

---调用shell执行指定系统命令
---@param cmd string 执行的系统命令
---@param callback fun(exitcode:number,output:number):any shell进程结束之后返回数据使用的回调函数
---@param timeLimit? number （可选参数）命令运行的最长时限，单位为毫秒
---@return boolean 是否成功启动命令
function system.cmd(cmd,callback,timeLimit)
end

---运行指定位置程序
---@param process string 运行的程序路径（与命令行参数）
---@param callback fun(exitcode:number,output:number):any 程序进程结束之后返回数据使用的回调函数
---@param timeLimit? number （可选参数）程序进程运行的最长时限，单位为毫秒
---@return boolean 是否成功启动进程
function system.newProcess(process,callback,timeLimit)
end

---获取当前时间字符串
---@return string 当前的时间字符串，使用当地时区和24小时制。
function system.getTimeStr()
end

---获取当前的时间对象
---@return TimeObject 当前的时间对象
function system.getTimeObj()
end

---随机生成一个 GUID 字符串
---@return string 一个随机生成的唯一标识符GUID
function system.randomGuid()
end