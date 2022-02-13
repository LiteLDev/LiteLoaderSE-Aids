---📮 方块实体对象 API
在LXL中，使用「方块实体对象」来操作和获取与特定方块关联的附加数据。
---@class BlockEntity 
---@field pos IntPos IntPos
---@field type Integer Integer
 BlockEntity = {}

---获取方块实体对应的NBT对象
---@return NbtCompound 方块实体的NBT对象
function BlockEntity:getNbt()
end

---写入方块实体对应的NBT对象
---@param nbt NbtCompound 
---@return boolean 是否成功写入
function BlockEntity:setNbt(nbt)
end

---获取方块实体对应的方块对象
---@return Block 方块实体对应的方块对象
function BlockEntity:getBlock()
end