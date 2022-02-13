/**
 * WebSocket 客户端对象
 */ 
class WSClient {
  
/**
 * 当前的连接状态
 * @type Any
 */ 
 status;
/**
 * 处于正常连接中
 * @type Any
 */ 
 Open;
/**
 * 正在断开连接
 * @type Any
 */ 
 Closing;
/**
 * 未连接
 * @type Any
 */ 
 Closed;
  
  


/**
 * 创建连接
 * @param {string} target 要连接的目标地址
 * @returns {boolean} 是否成功连接
 */
 connect(target)

/**
 * 发送文本 / 二进制消息
 * @param {string|ByteBuffer} msg 要发送的文本 / 二进制数据
 * @returns {boolean} 是否成功发送
 */
 send(msg)

/**
 * 监听WebSocket事件 收到文本消息
 * @param {"onTextReceived"} event 要监听的事件名
 * @param {(msg:string)any} callback 注册的监听函数
 * @returns {boolean} 是否成功监听事件
 */
 listen(event,callback)

/**
 * 监听WebSocket事件 收到二进制消息
 * @param {"onBinaryReceived"} event 要监听的事件名
 * @param {(data:ByteBuffer)any} callback 注册的监听函数
 * @returns {boolean} 是否成功监听事件
 */
 listen(event,callback)

/**
 * 监听WebSocket事件 发生错误
 * @param {"onError"} event 要监听的事件名
 * @param {(msg:string)any} callback 注册的监听函数
 * @returns {boolean} 是否成功监听事件
 */
 listen(event,callback)

/**
 * 监听WebSocket事件  连接丢失
 * @param {"onLostConnection"} event 要监听的事件名
 * @param {(code:number)any} callback 注册的监听函数
 * @returns {boolean} 是否成功监听事件
 */
 listen(event,callback)

/**
 * 关闭连接
在处于关闭状态时，请勿继续使用此客户端对象！
 * @returns {boolean} boolean
 */
 close()

/**
 * 强制断开连接
在处于关闭状态时，请勿继续使用此客户端对象！
 * @returns {boolean} 是否成功断开连接
 */
 shutdown()

/**
 * 获取错误码
 * @returns {number} 上一次错误产生的错误码
 */
 errorCode()  



}
