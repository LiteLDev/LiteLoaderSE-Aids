---🎈 实体对象 API
在LXL中，使用「实体对象」来操作和获取某一个实体的相关信息。
---@class Entity 
---@field name String String
---@field type String String
---@field id Integer Integer
---@field pos FloatPos FloatPos
---@field blockPos IntPos IntPos
---@field maxHealth Integer Integer
---@field health Integer Integer
---@field inAir Boolean Boolean
---@field speed Float Float
---@field inWater Boolean Boolean
 Entity = {}

---传送实体至指定位置
---@param pos FloatPos 目标位置坐标 （或者使用x, y, z, dimid来确定玩家位置）
---@return boolean 是否成功传送
function Entity:teleport(pos)
end

---传送实体至指定位置
---@param x number x
---@param y number y
---@param z number z
---@param dimid number dimid
---@return boolean 是否成功传送
function Entity:teleport(x,y,z,dimid)
end

---杀死指定实体 
---@return boolean 是否成功执行
function Entity:kill()
end

---使指定实体着火
---@param time number 着火时长，单位秒
---@return boolean 是否成功着火
function Entity:setOnFire(time)
end

---判断一个实体对象是不是玩家
---@return boolean 当前实体对象是不是玩家
function Entity:isPlayer()
end

---将实体对象转换玩家对象
---@return Player|nil 转换成的玩家对象
---如果此实体对象指向的不是某个玩家，或者转换失败，则返回 `nil`
function Entity:toPlayer()
end

---获取生物盔甲栏的容器对象  
---@return Container 此实体盔甲栏对应的容器对象
function Entity:getArmor()
end

---判断生物是否拥有容器（盔甲栏除外）
---@return boolean 个生物实体是否拥有容器
function Entity:hasContainer()
end

---获取生物所拥有的容器对象（盔甲栏除外）
---@return Container 这个生物实体所拥有的容器对象
function Entity:getContainer()
end

---为实体增加一个Tag
---@param tag string 要增加的tag字符串
---@return boolean 是否设置成功
function Entity:addTag(tag)
end

---为实体移除一个Tag
---@param tag string 要移除的tag字符串
---@return boolean 是否移除成功
function Entity:removeTag(tag)
end

---实体拥有的所有Tag列表
---@return string[] 实体所有的 tag 字符串列表
function Entity:getAllTags()
end

---检查实体是否拥有某个Tag
---@param tag string 要检查的tag字符串
---@return boolean 是否拥有这个Tag
function Entity:hasTag(tag)
end

---获取实体对应的NBT对象
---@return NbtCompound 玩家的NBT对象
function Entity:getNbt()
end

---写入实体对应的NBT对象
---@param nbt NbtCompound NBT对象
---@return boolean 是否成功写入
function Entity:setNbt(nbt)
end

---对实体造成伤害
---注意，此处造成的伤害为真实伤害，无法被盔甲等保护装备减免
---@param damage number 对实体造成的伤害数值
---@return boolean 是否造成伤害
function Entity:hurt(damage)
end

---刷新生物物品栏、盔甲栏
---@return boolean 
function Entity:refreshItems()
end