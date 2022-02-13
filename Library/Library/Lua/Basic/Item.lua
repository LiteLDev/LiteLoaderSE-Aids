---🧰 物品对象 API
在LXL中，使用「物品对象」来操作和获取某一个物品栏物品的相关信息
---@class Item 
---@field name String String
---@field type String String
---@field id Integer Integer
---@field count Integer Integer
---@field aux String String
 Item = {}

---通过 现有的物品对象 生成一个新的物品对象
---@return Item 生成的新物品对象
function Item:clone()
end

---判断物品对象是否为空
---@return boolean 这个物品对象是否为空
function Item:isnil()
end

---将此物品对象置为空（删除物品）
---@return boolean 是否删除成功
function Item:setnil()
end

---将此物品对象设置为另一个物品
---@param item Item 要赋值的物品对象
---@return boolean 是否赋值成功
function Item:set(item)
end

---根据物品对象，在指定的位置生成一个同样内容的掉落物实体
---@param item Item 生成掉落物实体所使用的物品对象
---@param pos FloatPos 生成掉落物实体的位置的坐标对象（或者使用x, y, z, dimid来确定生成位置）
---@return Entity 生成的掉落物实体对象
---如返回值为 nil 则表示生成失败
function Item:spawnItem(item,pos)
end

---获取物品对应的NBT对象
---
---@return NbtCompound 物品的NBT对象
function Item:getNbt()
end

---写入物品对应的NBT对象
---@param nbt NbtCompound 
---@return boolean 是否成功写入
function Item:setNbt(nbt)
end

---
---@param lore string[] 
---@return  
function Item:setLore(lore)
end

---根据物品对象，在指定的位置生成一个同样内容的掉落物实体
---@param item Item 生成掉落物实体所使用的物品对象
---@param pos IntPos 生成掉落物实体的位置的坐标对象（或者使用x, y, z, dimid来确定生成位置）
---@return Entity 生成的掉落物实体对象
---如返回值为 nil 则表示生成失败
function Item:spawnItem(item,pos)
end