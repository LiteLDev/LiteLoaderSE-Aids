---
---@class NbtValue 
 NbtValue = {}

---获取NBT对象储存的数据类型
---@return  此NBT对象储存的数据类型
function NbtValue:getType()
end

---将NBT对象转换为字符串
---@param space number （可选参数）如果要格式化输出的字符串，则传入此参数
---@return string 对应的Json字符串
function NbtValue:tostring(space)
end

---清理此NBT对象
---@return boolean 是否成功清理
function NbtValue:destroy()
end

---设置对象的数据
---@param data any 根据这个NBT对象的数据类型，写入对应类型的数据
---@return boolean 是否成功写入
function NbtValue:set(data)
end

---读取对象的数据
---@return any 对象中储存的数据
function NbtValue:get()
end