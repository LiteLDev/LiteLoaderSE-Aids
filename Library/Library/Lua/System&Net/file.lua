---📝 简单文件读写 API
---@class file 
---@field readMode Any Any
---@field writeMode Any Any
---@field appendMode Any Any
 file = {}

---读入文件的所有内容
---@param path string 目标文件的路径，相对路径以BDS根目录为基准
---@return string 文件的所有数据
---如返回值为 nil 则表示读取失败
function file.readFrom(path)
end

---向指定文件写入内容
---@param path string 目标文件的路径，相对路径以BDS根目录为基准
---@param text string 要写入的内容
---@return boolean 是否写入成功
function file.writeTo(path,text)
end

---向指定文件追加一行
---@param path string 目标文件的路径，相对路径以BDS根目录为基准
---@param text string 要写入的内容
---@return boolean 是否写入成功
function file.writeLine(path,text)
end

---获取一个文件对象
---@param path string 想要打开的文件路径
---@param mode any 文件的打开模式
---@param isBinary boolean （可选参数）是否以二进制模式打开文件，默认为false
---@return File 打开的文件对象
---如返回值为 nil 则表示打开失败
function file.open(path,mode,isBinary)
end

---创建文件夹
---@param dir string 目标文件夹的路径。可以直接创建多层，不需要逐层创建
---@return boolean 是否成功创建
function file.createDir(dir)
end

---创建文件夹
---@param dir string 目标文件夹的路径。可以直接创建多层，不需要逐层创建
---@return boolean 是否成功创建
function file.mkdir(dir)
end

---判断文件 / 文件夹是否存在
---@param path string 目标文件 / 文件夹的路径
---@return boolean 目标是否存在
function file.exists(path)
end

---复制文件 / 文件夹到指定位置
---@param from string 源文件 / 文件夹的路径
---@param to string 目标文件 / 文件夹的位置
---@return boolean 是否复制成功
function file.copy(from,to)
end

---移动文件 / 文件夹到指定位置
---@param from string 源文件 / 文件夹的路径
---@param to string 目标文件 / 文件夹的位置
---@return boolean 是否复制成功
function file.move(from,to)
end

---重命名指定文件 / 文件夹
---@param old string 文件 / 文件夹的旧名字
---@param new string 新名字
---@return boolean 是否复制成功
function file.rename(old,new)
end

---获取指定文件的大小
---@param path string 所操作的文件路径
---@return number 文件的大小（字节）
function file.getFileSize(path)
end

---判断指定路径是否是文件夹
---@param path string 所判断的路径
---@return boolean 目标路径是否是文件夹
function file.checkIsDir(path)
end

---列出指定文件夹下的所有文件 / 文件夹
---@param dir string 文件夹路径
---@return string[] 文件名、文件夹名数组
function file.getFilesList(dir)
end

---删除文件 / 文件夹
---@param path string 目标文件 / 文件夹的路径
---@return boolean 是否成功删除
function file.delete(path)
end