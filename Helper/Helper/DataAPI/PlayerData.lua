
---储存玩家绑定数据
---@param name string 要储存到绑定数据的名字
---@param data any 你要储存的绑定数据，可以是`Null`
---@return boolean 是否成功储存
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/PlayerData)
---LiteXLoader - 系统功能接口
function Player.setExtraData(name, data) end

---获取玩家绑定数据
---@param name string 要读取的绑定数据的名字
---@return any 取决于储存的数据类型
---如返回值为 `Null` 则表示未获取到指定的绑定数据，或者数据为空
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/PlayerData)
---LiteXLoader - 系统功能接口
function Player.getExtraData(name) end

---删除玩家绑定数据
---@param name string 要删除的绑定数据的名字
---@return boolean 是否删除成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/PlayerData)
---LiteXLoader - 系统功能接口
function Player.delExtraData(name) end

---根据玩家名查询Xuid
---@param name string 要查询的玩家名
---@return string 如果返回值为`Null`，则代表查询失败
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/PlayerData)
---LiteXLoader - 系统功能接口
function data.name2xuid(name) end

---根据Xuid查询玩家名
---@param xuid string 要查询的玩家Xuid
---@return string 玩家名
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/PlayerData)
---LiteXLoader - 系统功能接口
function data.xuid2name(xuid) end