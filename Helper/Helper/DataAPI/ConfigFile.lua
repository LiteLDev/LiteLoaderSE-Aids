---数据对象
---@class data
data = {}

---配置对象
---@class conf
conf = {}

---创建/打开一个配置文件
---@param path string 配置文件所在路径
---@param format string （可选参数）配置文件的格式，字符串形式。可选项有 `json ` 或 ` ini`。如果不传入此参数，默认为 `ini` 格式
---@param default string （可选参数）配置文件的默认内容。 
---@return conf 如果返回值为`Null`，则代表创建/打开失败
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function data.openConfig(path, format, default) end

---[ Json ] 写入配置项
---@param name string 配置项名字
---@param data number|string|boolean|table 要写入的配置数据。允许的数据类型有：`Integer` `Float` `String` `Boolean` `Array` `Object` 
---@return boolean 是否写入成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.set(name, data) end

---[ Json ] 读取配置项
---@param name string 配置项名字
---@param default any （可选参数）当读取失败时返回的默认值。默认为`Null`
---@return any 指定配置项的数据
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.get(name, default) end

---[ Json ] 删除配置项
---@param name string 配置项名字
---@return boolean 是否删除成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.delete(name) end

---[ Ini ] 写入配置项
---@param section string 配置项键名
---@param name string 配置项名字
---@param data number|string|boolean 要写入的配置数据
---@return boolean 是否写入成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.set(section, name, data) end

---[ Ini ] 读取整数项
---@param section string 配置项键名
---@param name string 配置项名字
---@param default number （可选参数）当读取失败时返回的默认值。默认为`0`
---@return number 指定配置项的数据
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.getInt(section, name, default) end

---[ Ini ] 读取字符串项
---@param section string 配置项键名
---@param name string 配置项名字
---@param default number （可选参数）当读取失败时返回的默认值。默认为`""`
---@return string 指定配置项的数据
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.getStr(section, name, default) end

---[ Ini ] 读取浮点数项
---@param section string 配置项键名
---@param name string 配置项名字
---@param default number （可选参数）当读取失败时返回的默认值。默认为`0.0`
---@return number 指定配置项的数据
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.getFloat(section, name, default) end

---[ Ini ] 读取布尔项
---@param section string 配置项键名
---@param name string 配置项名字
---@param default number （可选参数）当读取失败时返回的默认值。默认为`false`
---@return boolean 指定配置项的数据
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.getBool(section, name, default) end

---[ Ini ] 删除配置项
---@param section string 配置项键名
---@param name string 配置项名字
---@return boolean 是否删除成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.delete(section, name) end

---重新加载文件中的配置项
---@return boolean 是否成功加载
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.reload() end

---关闭配置文件
---@return boolean 是否成功关闭
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.close() end

---获取配置文件路径
---@return string 当前配置文件的文件路径
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.getPath() end

---读取整个配置文件的内容
---@return string 当前配置文件的所有内容
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.read() end

---写入整个配置文件的内容
---@param content string 写入的内容
---@return boolean 是否写入成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/ConfigFile)
---LiteXLoader - 配置与数据处理接口
function conf.write(content) end
