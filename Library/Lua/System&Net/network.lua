---🌏 网络接口 API
如果有更复杂的需求，可以使用各自语言平台的网络库来完成任务
---@class network 
 network = {}

---发送一个异步HTTP(s) Get请求
---@param url string 请求的目标地址（包括 Get 请求附带的参数）
---@param callback fun(status:number,result:string):any 当请求返回时执行的回调函数，用于回传HTTP(s)响应结果
---@return boolean 是否成功发送请求
function network.httpGet(url,callback)
end

---发送一个异步HTTP(s) Post请求
---@param url string 请求的目标地址（包括 Get 请求附带的参数）
---@param data string 发送的数据
---@param type string 发送的 Post 数据类型 形如 text/plain
---@param callback fun(status:number,result:string):any 当请求返回时执行的回调函数，用于回传HTTP(s)响应结果
---@return boolean 是否成功发送请求
function network.httpPost(url,data,type,callback)
end

---获取一个WebSocket 客户端对象
---@return WSClient 一个新的websocket对象
function network.newWebSocket()
end