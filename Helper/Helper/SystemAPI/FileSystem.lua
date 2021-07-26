
---创建文件夹
---@param dir string 目标文件夹的路径
---@return boolean 是否成功创建
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/FileSystem)
---LiteXLoader - 系统功能接口
function file.createDir(dir) end

---删除文件/文件夹
---@param path string 目标文件/文件夹的路径
---@return boolean 是否删除成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/FileSystem)
---LiteXLoader - 系统功能接口
function file.delete(path) end

---判断文件/文件夹是否存在
---@param path string 目标文件/文件夹的路径
---@return boolean 目标是否存在
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/FileSystem)
---LiteXLoader - 系统功能接口
function file.exists(path) end

---复制文件/文件夹到指定位置
---@param from string 源文件/文件夹的路径
---@param to string 目标文件/文件夹的路径
---@return boolean 是否复制成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/FileSystem)
---LiteXLoader - 系统功能接口
function file.copy(from,to) end

---移动文件/文件夹到指定位置
---@param from string 源文件/文件夹的路径
---@param to string 目标文件/文件夹的路径
---@return boolean 是否复制成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/FileSystem)
---LiteXLoader - 系统功能接口
function file.move(from,to) end

---重命名指定文件/文件夹
---@param from string 文件/文件夹旧名字
---@param to string 新名字
---@return boolean 是否复制成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/FileSystem)
---LiteXLoader - 系统功能接口
function file.rename(from,to) end

---列出指定文件夹下的所有文件/文件夹
---@param dir string 文件夹路径
---@return FileArray 文件名/文件夹名数组
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/FileSystem)
---LiteXLoader - 系统功能接口
function file.getFilesList(dir) end

---@class FileArray
FileArray = {string,string,string,...}