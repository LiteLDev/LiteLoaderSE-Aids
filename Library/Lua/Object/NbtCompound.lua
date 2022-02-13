---
---@class NbtCompound 
 NbtCompound = {}

---获取NBT对象储存的数据类型
---@return  此NBT对象储存的数据类型
function NbtCompound:getType()
end

---将NBT对象转换为字符串
---@param space number （可选参数）如果要格式化输出的字符串，则传入此参数
---@return string 对应的Json字符串
function NbtCompound:toString(space)
end

---NBT对象序列化为SNBT
---@return string 对应的SNBT字符串
function NbtCompound:toSNBT()
end

---NBT对象序列化为二进制NBT
---@return ByteBuffer 对应的二进制NBT数据
function NbtCompound:toBinary()
end

---清理此NBT对象
---@return boolean 是否成功清理
function NbtCompound:destroy()
end

---设置某个下标位置的具体数据
---@param key string 要操作的键名
---@return NbtCompound 写入完毕的NBT列表（便于连锁进行其他操作）
function NbtCompound:setEnd(key)
end

---设置某个下标位置的具体数据
---@param key string 要操作的键名
---@param data any 要写入的具体数据
---@return NbtCompound 写入完毕的NBT对象（便于连锁进行其他操作）
function NbtCompound:setByte(key,data)
end

---设置某个下标位置的具体数据
---@param key string 要操作的键名
---@param data any 要写入的具体数据
---@return NbtCompound 写入完毕的NBT对象（便于连锁进行其他操作）
function NbtCompound:setShort(key,data)
end

---设置某个下标位置的具体数据
---@param key string 要操作的键名
---@param data any 要写入的具体数据
---@return NbtCompound 写入完毕的NBT对象（便于连锁进行其他操作）
function NbtCompound:setInt(key,data)
end

---设置某个下标位置的具体数据
---@param key string 要操作的键名
---@param data any 要写入的具体数据
---@return NbtCompound 写入完毕的NBT对象（便于连锁进行其他操作）
function NbtCompound:setLong(key,data)
end

---设置某个下标位置的具体数据
---@param key string 要操作的键名
---@param data any 要写入的具体数据
---@return NbtCompound 写入完毕的NBT对象（便于连锁进行其他操作）
function NbtCompound:setFloat(key,data)
end

---设置某个下标位置的具体数据
---@param key string 要操作的键名
---@param data any 要写入的具体数据
---@return NbtCompound 写入完毕的NBT对象（便于连锁进行其他操作）
function NbtCompound:setDouble(key,data)
end

---设置某个下标位置的具体数据
---@param key string 要操作的键名
---@param data any 要写入的具体数据
---@return NbtCompound 写入完毕的NBT对象（便于连锁进行其他操作）
function NbtCompound:setstring(key,data)
end

---读取键对应的值的具体数据
---@param key string 要操作的键名
---@return any 键对应的值的具体数据
function NbtCompound:getData(key)
end

---将Compound类型转换为Object
---@return Object 对应的对象 / 表
function NbtCompound:toObject()
end