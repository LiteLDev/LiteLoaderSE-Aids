---
---@class NbtList 
 NbtList = {}

---获取NBT对象储存的数据类型
---@return  此NBT对象储存的数据类型
function NbtList:getType()
end

---将NBT对象转换为字符串
---@param space number （可选参数）如果要格式化输出的字符串，则传入此参数
---@return string 对应的Json字符串
function NbtList:tostring(space)
end

---清理此NBT对象
---@return boolean 是否成功清理
function NbtList:destroy()
end

---获取列表长度
---@return number 此列表的长度
function NbtList:getSize()
end

---获取某个下标位置储存的数据类型
---@param index number 要查询的目标下标
---@return any 此坐标处储存的NBT的数据类型
function NbtList:getTypeOf(index)
end

---设置某个下标位置的NBT对象
---@param index number 要操作的目标下标
---@param tag any 要写入的 NBT 对象（它承载着具体的NBT数据）。
写入对象的数据类型必须和下标位置储存的数据类型一致，且下标不能超出有效下标的最大值
---@return NbtList 写入完毕的NBT列表
function NbtList:setTag(index,tag)
end

---读取某个下标位置的NBT对象
---@param index any 要操作的目标下标
---@return any 下标位置的NBT对象。如果要读取的NBT不存在，将返回nil
function NbtList:getTag(index)
end

---往列表末尾追加一个NBT对象
---@param tag any 要追加的 NBT 对象（它承载着具体的NBT数据）
---@return NbtList 追加完毕的NBT列表（便于连锁进行其他操作）
function NbtList:addTag(tag)
end

---删除某个下标位置的NBT对象
---@param index number 要删除的目标下标，
下标不能超出有效下标的最大值
---@return NbtList 处理完毕的NBT列表（便于连锁进行其他操作）
function NbtList:removeTag(index)
end

---设置某个下标位置的具体数据
---@param index number 要操作的目标下标
---@return NbtList 写入完毕的NBT列表（便于连锁进行其他操作）
function NbtList:setEnd(index)
end

---设置某个下标位置的具体数据
---@param index number 要操作的目标下标
---@param data any 要写入的具体数据
---@return NbtList 写入完毕的NBT列表（便于连锁进行其他操作）
function NbtList:setByte(index,data)
end

---设置某个下标位置的具体数据
---@param index number 要操作的目标下标
---@param data any 要写入的具体数据
---@return NbtList 写入完毕的NBT列表（便于连锁进行其他操作）
function NbtList:setShort(index,data)
end

---设置某个下标位置的具体数据
---@param index number 要操作的目标下标
---@param data any 要写入的具体数据
---@return NbtList 写入完毕的NBT列表（便于连锁进行其他操作）
function NbtList:setInt(index,data)
end

---设置某个下标位置的具体数据
---@param index number 要操作的目标下标
---@param data any 要写入的具体数据
---@return NbtList 写入完毕的NBT列表（便于连锁进行其他操作）
function NbtList:setLong(index,data)
end

---设置某个下标位置的具体数据
---@param index number 要操作的目标下标
---@param data any 要写入的具体数据
---@return NbtList 写入完毕的NBT列表（便于连锁进行其他操作）
function NbtList:setFloat(index,data)
end

---设置某个下标位置的具体数据
---@param index number 要操作的目标下标
---@param data any 要写入的具体数据
---@return NbtList 写入完毕的NBT列表（便于连锁进行其他操作）
function NbtList:setDouble(index,data)
end

---设置某个下标位置的具体数据
---@param index number 要操作的目标下标
---@param data any 要写入的具体数据
---@return NbtList 写入完毕的NBT列表（便于连锁进行其他操作）
function NbtList:setstring(index,data)
end

---读取某个下标位置的具体数据
---@param index number 要操作的目标下标
---@return any 指定位置储存的具体数据
function NbtList:getData(index)
end

---将NbtList类型转换为{}
---@return any[] 对应的数组 / 列表
function NbtList:to{}()
end