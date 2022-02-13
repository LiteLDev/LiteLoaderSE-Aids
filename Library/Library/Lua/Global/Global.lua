

---输出信息到控制台
---这是为了方便输出信息而设计的便捷函数
---@param data1? any 
---@param data2? any 
---@param data3?  
---@return nil 
function log(data1,data2,data3)
end

---输出带颜色文本
---@param color string 此行输出的颜色
---@param data1? any 
---@param data2? any 
---@return nil 
function colorLog(color,data1,data2)
end

---推迟一段时间执行函数
---@param func fun(:):any 待执行的函数
---@param msec number 推迟执行的时间（毫秒）
---@return number 此任务ID
function setTimeout(func,msec)
end

---推迟一段时间执行代码段（eval）
---@param code string 待执行的代码段
---@param msec number 推迟执行的时间（毫秒）
---@return number 此任务ID
function setTimeout(code,msec)
end

---设置周期执行函数
---@param func fun():any 待执行的函数
---@param msec number 执行间隔周期（毫秒）
---@return number 此任务ID
function setInterval(func,msec)
end

---设置周期执行代码段（eval）
---@param code string 待执行的代码段
---@param msec number 执行间隔周期（毫秒）
---@return number 此任务ID
function setInterval(code,msec)
end

---取消延时 / 周期执行项
---@param timerid number 由前几个函数返回的任务ID
---@return boolean|nil 是否取消成功
function clearInterval(timerid)
end