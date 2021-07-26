
---@class Item 物品对象
---@field name string 游戏内显示的物品名称
---@field type string 物品标准类型名
---@field id number 物品的游戏内id
---@field count number 这个物品对象堆叠的个数
---@field aux number 物品附加值（如羊毛颜色）
Item={}

---@class ItemObject 玩家所拥有的所有物品对象的集合
---@field hand Item 玩家的主手物品
---@field offHand Item 玩家的副手物品
---@field inventory ItemArray 玩家物品栏中所有物品的数组（共40个物品）
---@field armor ItemArray 玩家盔甲栏中所有物品的数组（共4个物品）
---@field endchest ItemArray 玩家末影箱中所有物品的数组（共30个物品）
ItemObject={}

---@class ItemArray 物品对象集合
---@vararg Item
ItemArray = {Item,Item,...}


---判断物品对象是否为空
---@return boolean 这个物品对象是否为空
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Item)
---LiteXLoader 物品相关
function Item.isNull() end

---设置自定义Lore
---@param names table 要设置的Lore字符串的数组
---@return boolean 是否设置成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Item)
---LiteXLoader 物品相关
function Item.setLore(names) end
