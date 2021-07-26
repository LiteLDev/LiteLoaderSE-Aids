---@diagnostic disable: undefined-global
---获取所有在线玩家的列表
---
---此函数会返回一个玩家对象的数组，其中每个对象都对应了一个服务器中的玩家
---@return table
function mc.getOnlinePlayers() return table end


---@param info string 玩家的名字或者Xuid
---@return Player 生成的玩家对象
function mc.getPlayer(info) return Player end


---@class Player 玩家对象
---@field name string 玩家名称
---@field pos FloatPos 玩家当前坐标对象
---@field realName string 玩家的真实名字
---@field xuid string 玩家Xuid字符串
---@field uuid string 玩家Uuid字符串
---@field ip string 玩家设备的IP地址
---@field permLevel number 玩家的操作权限等级（0 - 4）	
---@field gameMode number 玩家的游戏模式（0 - 3）
---@field maxHealth number 玩家最大生命值
---@field health number 玩家当前生命值
---@field inAir boolean 玩家当前是否悬空
---@field sneaking boolean 玩家当前是否正在潜行	
Player = {}

---判断玩家是否为OP
---@return boolean 玩家是否为OP
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.isOP() end

---断开玩家连接
---@param msg? string 被踢出玩家出显示的断开原因
---如果不传入，默认为“正在从服务器断开连接
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.kick(msg) end

---断开玩家连接
---@param msg string (可选参数) 被踢出玩家出显示的断开原因
---如果不传入，默认为“正在从服务器断开连接
function Player.disconnect(msg) end



---发送一个文本消息给玩家
---@param msg string 待发送的文本
---@param type? msgtype 发送的文本消息类型，默认为0
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.tell(msg,type) end

---发送一个文本消息给玩家
---@param msg string 待发送的文本
---@param type? msgtype 发送的文本消息类型，默认为0
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.sendText(msg,type) end

---广播一个文本消息给所有玩家
---@param msg string 待发送的文本
---@param type? msgtype 发送的文本消息类型，默认为0
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function mc.broadcast(msg,type) end

---以某个玩家身份执行一条命令
---@param cmd string 待执行的命令
---@return boolean 是否执行成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.runcmd(cmd) end

---传送玩家至指定位置
---@param pos FloatPos
---@return boolean 是否成功传送
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.teleport(pos) end

---杀死玩家
---@return boolean 是否成功执行
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.kill() end

---重命名玩家
---@param newname string 玩家的新名字
---@return boolean 是否重命名成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.rename(newname) end

---查询玩家手中的物品
---@return Item 玩家主手中的物品对象
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.getHand() end

---查询玩家手中的物品
---@return ItemObject 玩家主手中的物品对象
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.getAllItems() end

---修改玩家操作权限
---@param level levelmode
---@return boolean 是否成功修改
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.setPermLevel(level) end

---修改玩家游戏模式
---@param mode gamemode 游戏模式
---@return boolean 是否成功修改
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.setGameMode(mode) end

---提高玩家经验等级
---@param count number 要提升的经验等级
---@return boolean 是否设置成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.addLevel(count) end

---传送玩家至指定服务器
---@param server string 目标服务器IP / 域名
---@param port number 目标服务器端口
---@return boolean 是否成功传送
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.transServer(server,port) end

---使玩家客户端崩溃
---@return boolean 是否成功执行
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.crash() end

---获取玩家计分板值
---@param name string 计分板名称
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.getScore(name) end

---设置玩家计分板值
---@param name string 计分板名称
---@param value number 设置的数值
---@return boolean 是否设置成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.setScore(name,value) end

---给玩家计分板项加分
---@param name string 计分板名称
---@param value number 要增加的数值
---@return boolean 是否设置成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.addScore(name,value) end

---移除玩家计分板项
---@param name string 计分板名称
---@return boolean 是否移除成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.removeScore(name) end

---设置玩家自定义侧边栏
---@param title string侧边栏标题
---@param data table 侧边栏对象内容对象
---对象中的每个键 - 值对将被设置为侧边栏内容的一行
---@return boolean 是否成功设置
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.setSidebar(title,data) end

---移除玩家自定义侧边栏 
---@return boolean 是否成功移除
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.removeSidebar() end

---设置玩家看到的自定义Boss血条
---@param title string 自定义血条标题
---@param percent number 血条中的血量百分比，有效范围为0~100。0为空血条，100为满
---@return boolean 是否成功设置
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.setBossBar(title,percent) end

---移除玩家的自定义Boss血条
---@return boolean 是否成功移除
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Player)
---LiteXLoader 玩家相关
function Player.removeBossBar() end



