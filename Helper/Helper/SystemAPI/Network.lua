
---网络对象
---@class network
network = {}

---发送一个异步HTTP(s) Get请求
---@param url string 请求的目标地址
---@param callback function 当请求返回时执行的回调函数
--- 
--- ```
--- function(status,result)
--- status : Number
--- --返回的HTTP(s)响应码，如200代表请求成功
--- result : string 
--- --返回的具体数据
--- ```
---
---@return boolean 是否成功发送请求
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/Network)
---LiteXLoader - 系统功能接口
function network.httpGet(url,callback) end

---发送一个异步HTTP(s) Post请求
---@param url string 请求的目标地址
---@param data string 发送的数据
---@param type string 发送的 Post 数据类型，形如 `text/plain` `application/x-www-form-urlencoded` 等
---@param callback function 当请求返回时执行的回调函数
--- 
--- ```
--- function(status,result)
--- status : Number
--- --返回的HTTP(s)响应码，如200代表请求成功
--- result : string 
--- --返回的具体数据
--- ```
---
---@return boolean 是否成功发送请求
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/Network)
---LiteXLoader - 系统功能接口
function network.httpGet(url,data,type,callback) end