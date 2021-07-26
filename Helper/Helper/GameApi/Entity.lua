---@class Entity 实体对象
---@field name string 实体名称
---@field type string 实体标准类型名
---@field id number 实体的游戏内id
---@field pos FloatPos 实体所在坐标
---@field maxHealth number 实体最大生命值
---@field health number 实体当前生命值
---@field inAir boolean 实体当前是否悬空
Entity = {}


---传送实体至指定位置
---@param pos FloatPos 目标位置坐标
---@return boolean 是否成功传送
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 实体相关
function Entity.teleport(pos) end

---杀死指定实体
---@return boolean 否成功执行
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Entity)
---LiteXLoader 实体相关
function Entity.kill() end

---将实体对象转换玩家对象
---@return Player 转换成的玩家对象
---如果此实体对象指向的不是某个玩家，或者转换失败，则返回 Null
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Entity)
---LiteXLoader 实体相关
function Entity.toPlayer() end