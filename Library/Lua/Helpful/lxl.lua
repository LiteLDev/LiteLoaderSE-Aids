---💡 插件加载相关 API
---@class lxl 
 lxl = {}

---获取LiteXLoader加载器版本
---@return ObjectVersion 加载器版本对象
function lxl.version()
end

---检查LiteXLoader加载器版本
---@param major number 检查当前已安装LXL的主版本号是否 >= 此值
---@param minor? number 检查当前已安装LXL的次版本号是否 >= 此值
---@param revision? number 检查当前已安装LXL的修订版本号是否 >= 此值
---@return boolean 检查结果
---如果检测发现当前安装的LXL版本低于传入的数值，将返回false。
---你可以选择根据结果判断并报错，提醒用户升级自己的LXL版本
function lxl.requireVersion(major,minor,revision)
end

---列出所有已加载的插件
---@return string[] 已加载的所有的插件名字列表
function lxl.listPlugins()
end

---导出函数
---@param func fun():any 要导出的函数
---@param name string 函数的导出名称。其他插件根据导出名称来调用这个函数
---@return boolean 是否成功导出
function lxl.export(func,name)
end

---导入函数
---@param name string 要导入的函数使用的导出名称
---@return fun():any 导入的函数
function lxl.import(name)
end

---设置插件依赖库
---@param path string 依赖库文件名（如addplugin.js)
---@param remotePath? string （可选参数）查找并装载依赖库的路径
---@return boolean 是否加载依赖库成功
function lxl.require(path,remotePath)
end

---将字符串作为脚本代码执行
---@param str string 要作为脚本代码执行的字符串
---@return any 执行结果
function lxl.eval(str)
end