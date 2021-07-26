
---设置服务器Motd字符串
---@param motd string 目标Motd字符串
---@return boolean 是否设置成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Server)
---LiteXLoader 服务器相关
function mc.setMotd(motd) end

---设置服务器自定义在线人数
---@param nowCount number 当前在线人数
---@param maxCount number 最大在线人数
---@return boolean 是否设置成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Server)
---LiteXLoader 服务器相关
function mc.setOnlinePlayer(nowCount,maxCount) end