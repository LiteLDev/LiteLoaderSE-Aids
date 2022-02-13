---方块对象
---@class Block 
---@field name String String
---@field type String String
---@field id Integer Integer
---@field pos IntPos IntPos
 Block = {}

---获取方块对应的NBT对象
---@return NbtCompound 方块的NBT对象
function Block:getNbt()
end

---写入方块对应的NBT对象
---@param nbt NbtCompound NBT对象
---@return boolean 是否成功写入
function Block:setNbt(nbt)
end

---获取方块的BlockState
---方便函数，协助解析方块BlockState并转换为Object，方便读取与解析
---等价于脚本执行block.getNbt().getTag("states").toObject()
---@return Object 方块的BlockState
function Block:getBlockState()
end

---写入方块对应的NBT对象
---@param nbt NbtCompound NBT对象
---@return boolean 是否成功写入
function Block:setNbt(nbt)
end

---判断方块是否拥有容器
---@return boolean 这个方块是否拥有容器
function Block:hasContainer()
end

---获取方块所拥有的容器对象
---@return Container 这个方块所拥有的容器对象
function Block:getContainer()
end

---判断方块是否拥有方块实体
---@return boolean 这个方块是否拥有方块实体
function Block:hasBlockEntity()
end

---获取方块所拥有的方块实体
---@return BlockEntity 这个方块所拥有的方块实体
function Block:getBlockEntity()
end

---删除方块所拥有的方块实体
---@return boolean 是否成功删除
function Block:removeBlockEntity()
end