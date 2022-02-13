---文件对象
---@class File 
---@field path String String
---@field size Integer Integer
 File = {}

---从文件读取文本 / 二进制数据
---@param cnt number 要读取的字符数 / 字节数
---@return string|ByteBuffer 读取的字符串内容 / 二进制数据
function File:readSync(cnt)
end

---从文件读取一行文本
---@return string 读取的字符串内容
---如返回值为 nil 则表示读取失败
function File:readLineSync()
end

---从文件读取所有内容
---@return string|ByteBuffer 读取的字符串内容 / 二进制数据
function File:readAllSync()
end

---写入文本 / 二进制数据到文件
---@param str string|ByteBuffer 要写入的内容
---@return boolean 是否成功写入
function File:writeSync(str)
end

---写入一行文本到文件
---@param str string 要写入的内容
---@return boolean 是否成功写入
function File:writeLineSync(str)
end

---移动文件指针
---@param pos number 文件指针要移动到的位置
---@param isRelative boolean 是否是相对当前文件指针位置移动
---@return boolean 是否移动成功
function File:seekTo(pos,isRelative)
end

---设定文件大小
---@param size number 要设定的目标大小
---@return boolean 是否设定成功
function File:setSize(size)
end

---关闭文件
---@return boolean 是否成功关闭
function File:close()
end

---文件指针是否位于文件尾
---@return boolean 文件指针是否处于文件尾
function File:isEOF()
end

---刷新文件缓冲区
---@return boolean 是否成功刷新
function File:flush()
end

---获取错误码
---@return number 上一次IO操作产生的错误码
function File:errorCode()
end

---清除错误状态
---@return boolean 是否成功清除
function File:clear()
end