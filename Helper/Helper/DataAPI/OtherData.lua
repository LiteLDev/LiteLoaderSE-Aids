
---变量转换为Json字符串
---@param var number|string|boolean|table 要转换为Json字符串的变量
---@param space number （可选参数）如果要格式化输出的字符串，则传入此参数代表每个缩进的空格数量，这样输出的Json串更适合人阅读。此参数默认为0，即不对输出字符串进行格式化
---@return string 转换成的Json字符串
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/OtherData)
---LiteXLoader - 系统功能接口
function data.toJson(var, space) end

---Json字符串解析为变量
---@param json string 要转换为变量的Json字符串
---@return any 转换成的变量
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/OtherData)
---LiteXLoader - 系统功能接口
function data.parseJson(json) end