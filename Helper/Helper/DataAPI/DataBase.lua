---数据库对象
---@class db
db = {}

---创建/打开数据库
---@param dir string 数据库的储存目录路径，以BDS根目录为基准
---@return db 如果返回值为`Null`，则代表创建 / 打开失败
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/DataBase)
---LiteXLoader - 配置与数据处理接口
function db.openDB(dir) end

---写入数据项
---@param name string 数据项名字
---@param data number|string|boolean|table 要写入的数据
---@return boolean 是否写入成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/DataBase)
---LiteXLoader - 配置与数据处理接口
function db.set(name, data) end

---读取数据项
---@param name string 数据项名字
---@return any 数据库中储存的这个项的数据
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/DataBase)
---LiteXLoader - 配置与数据处理接口
function db.get(name) end

---删除数据项
---@param name string 数据项名字
---@return boolean 是否成功删除
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/DataBase)
---LiteXLoader - 配置与数据处理接口
function db.delete(name) end

---获取所有数据项名字
---@return KeyArray 所有的数据项名字数组
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/DataBase)
---LiteXLoader - 配置与数据处理接口
function db.listKey() end

---关闭数据库
---@return boolean 是否成功关闭
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/DataAPI/DataBase)
---LiteXLoader - 配置与数据处理接口
function db.close() end

---@class KeyArray
KeyArray = {string,string,string,...}