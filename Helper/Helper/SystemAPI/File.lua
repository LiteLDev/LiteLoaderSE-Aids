---文件对象
---@class file
file = {}

---读入文件所有内容
---@param path string 目标文件的路径，相对路径以BDS根目录为基准
---@return string 文件的所有数据
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/File)
---LiteXLoader - 系统功能接口
function file.readForm(path) end

---向指定文件写入内容
---@param path string 目标文件的路径，相对路径以BDS根目录为基准
---@param text string 要写入的内容
---@return boolean 是否写入成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/File)
---LiteXLoader - 系统功能接口
function file.writeTo(path,text) end

---向指定文件追加一行
---@param path string 目标文件的路径，相对路径以BDS根目录为基准
---@param text string 要写入的内容
---@return string 文件的所有数据
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/File)
---LiteXLoader - 系统功能接口
function file.writeLine(path,text) end
