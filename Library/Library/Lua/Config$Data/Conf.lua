---Conf类
---@class Conf 
 Conf = {}

---读取布尔项(ini)
---@param section string 配置项键名
---@param name string 配置项名字
---@param default_cfg? boolean （可选参数）当读取失败时返回的默认值
---@return boolean 指定配置项的数据
function Conf:getBool(section,name,default_cfg)
end

---读取浮点数项(ini)
---@param section string 配置项键名
---@param name string 配置项名字
---@param default_cfg? Float （可选参数）当读取失败时返回的默认值
---@return Float 指定配置项的数据
function Conf:getFloat(section,name,default_cfg)
end

---读取字符串项(ini)
---@param section string 配置项键名
---@param name string 配置项名字
---@param default_cfg? string （可选参数）当读取失败时返回的默认值
---@return string 指定配置项的数据
function Conf:getStr(section,name,default_cfg)
end

---读取整数项(ini)
---@param section string 配置项键名
---@param name string 配置项名字
---@param default_cfg? number （可选参数）当读取失败时返回的默认值
---@return number 指定配置项的数据
function Conf:getInt(section,name,default_cfg)
end

---写入配置项(ini)
---@param section string 配置项键名
---@param name string 配置项名字
---@param data any 要写入的配置数据。允许的数据类型有：number Float string boolean
---@return boolean 是否写入成功
function Conf:set(section,name,data)
end

---删除配置项(json)
---@param name string 配置项名字
---@return boolean 是否删除成功
function Conf:delete(name)
end

---读取配置项(json)
---@param name string 配置项名字
---@param default_cfg? any 可选参数）当读取失败时返回的默认值
---@return any 指定配置项的数据
function Conf:get(name,default_cfg)
end

---写入配置项(json)
---@param name string 配置项名字
---@param data any 配置项名字
---@return boolean 是否写入成功
function Conf:set(name,data)
end

---删除配置项(ini)
---@param section string 配置项键名
---@param name string 配置项名字
---@return boolean 是否删除成功
function Conf:delete(section,name)
end

---重新加载文件中的配置项
---@return boolean 是否成功加载
function Conf:reload()
end

---关闭配置文件
---配置文件关闭之后，请勿继续使用！
---@return boolean 是否成功关闭
function Conf:close()
end

---获取配置文件路径
---@return string 当前配置文件的文件路径
function Conf:getPath()
end

---读取整个配置文件的内容
---@return string 当前配置文件的所有内容
function Conf:read()
end

---写入整个配置文件的内容
---@param content string 写入的内容
---@return boolean 是否写入成功
function Conf:write(content)
end