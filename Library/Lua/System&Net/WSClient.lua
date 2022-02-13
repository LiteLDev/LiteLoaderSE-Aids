---WebSocket 客户端对象
---@class WSClient 
---@field status Any Any
---@field Open Any Any
---@field Closing Any Any
---@field Closed Any Any
 WSClient = {}

---创建连接
---@param target string 要连接的目标地址
---@return boolean 是否成功连接
function WSClient:connect(target)
end

---发送文本 / 二进制消息
---@param msg string|ByteBuffer 要发送的文本 / 二进制数据
---@return boolean 是否成功发送
function WSClient:send(msg)
end

---监听WebSocket事件 收到文本消息
---@param event ""onTextReceived"" 要监听的事件名
---@param callback fun(msg:string):any 注册的监听函数
---@return boolean 是否成功监听事件
function WSClient:listen(event,callback)
end

---监听WebSocket事件 收到二进制消息
---@param event ""onBinaryReceived"" 要监听的事件名
---@param callback fun(data:ByteBuffer):any 注册的监听函数
---@return boolean 是否成功监听事件
function WSClient:listen(event,callback)
end

---监听WebSocket事件 发生错误
---@param event ""onError"" 要监听的事件名
---@param callback fun(msg:string):any 注册的监听函数
---@return boolean 是否成功监听事件
function WSClient:listen(event,callback)
end

---监听WebSocket事件  连接丢失
---@param event ""onLostConnection"" 要监听的事件名
---@param callback fun(code:number):any 注册的监听函数
---@return boolean 是否成功监听事件
function WSClient:listen(event,callback)
end

---关闭连接
---在处于关闭状态时，请勿继续使用此客户端对象！
---@return boolean boolean
function WSClient:close()
end

---强制断开连接
---在处于关闭状态时，请勿继续使用此客户端对象！
---@return boolean 是否成功断开连接
function WSClient:shutdown()
end

---获取错误码
---@return number 上一次错误产生的错误码
function WSClient:errorCode()
end