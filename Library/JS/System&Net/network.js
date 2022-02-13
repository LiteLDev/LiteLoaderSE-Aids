/**
 * 🌏 网络接口 API
如果有更复杂的需求，可以使用各自语言平台的网络库来完成任务
 */ 
class network {
  
  
  


/**
 * 发送一个异步HTTP(s) Get请求
 * @param {string} url 请求的目标地址（包括 Get 请求附带的参数）
 * @param {(status:number,result:string)any} callback 当请求返回时执行的回调函数，用于回传HTTP(s)响应结果
 * @returns {boolean} 是否成功发送请求
 */
 static httpGet(url,callback)

/**
 * 发送一个异步HTTP(s) Post请求
 * @param {string} url 请求的目标地址（包括 Get 请求附带的参数）
 * @param {string} data 发送的数据
 * @param {string} type 发送的 Post 数据类型 形如 text/plain
 * @param {(status:number,result:string)any} callback 当请求返回时执行的回调函数，用于回传HTTP(s)响应结果
 * @returns {boolean} 是否成功发送请求
 */
 static httpPost(url,data,type,callback)

/**
 * 获取一个WebSocket 客户端对象
 * @returns {WSClient} 一个新的websocket对象
 */
 static newWebSocket()  



}
