---获取所有数据项名字
---@class DB 
 DB = {}

---写入数据项
---@param name string 数据项名字
---@param data any 要写入的数据
---@return boolean 是否写入成功
function DB:set(name,data)
end

---读取数据项
---@param name string 数据项名字
---@return any 数据库中储存的这个项的数据
function DB:get(name)
end

---删除数据项
---@param name string 数据项名字
---@return boolean 是否成功删除
function DB:delete(name)
end

---获取所有数据项名字
---@return string[] 所有的数据项名字数组
function DB:listKey()
end

---关闭数据库
---@return boolean 是否成功关闭
function DB:close()
end