---LXL对象
---@class lxl
lxl = {}

---获取LiteXLoader加载器版本
---@return Version 加载器版本对象
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/Lxl)
---LiteXLoader - 系统功能接口
function lxl.version() end

---列出所有已加载的插件
---@return PluginsArray 已加载的所有的插件名字列表
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/Lxl)
---LiteXLoader - 系统功能接口
function lxl.listPlugins() end

---导出函数
---@param func function 要导出的函数
---@param name string 函数的导出名称。其他插件根据导出名称来调用这个函数
---@return boolean 是否成功导出
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/Lxl)
---LiteXLoader - 系统功能接口
function lxl.export(func, name) end

---导入函数
---@param name string 要调用的函数导出时使用的导出名称
---@param alias string （可选参数）导入时设置函数别名 
---@return boolean 是否成功导入
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/Lxl)
---LiteXLoader - 系统功能接口
function lxl.import(name, alias) end

---设置插件依赖库
---@param path string 依赖库文件名
---@param remotePath string （可选参数）查找并装载依赖库的路径
---@return boolean 是否加载依赖库成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/ScriptAPI/Lxl)
---LiteXLoader - 系统功能接口
function lxl.require(path, remotePath) end

---LXL版本对象
---@class Version
---@field major number 主版本号（如 **1**.0.2 里的 **1**）
---@field minor number 次版本号（如 1.**0**.2 里的 **0**）
---@field build number 开发版本号（如 1.0.**2** 里的 **2**）
---@field isBeta boolean 当前版本是否为测试版

---@class PluginsArray
PluginsArray = {string,string,string,...}