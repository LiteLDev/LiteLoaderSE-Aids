/**
 * 📡 系统调用 API
这些API提供了执行一些系统调用的接口
 */ 
class system {
  
  
  


/**
 * 调用shell执行指定系统命令
 * @param {string} cmd 执行的系统命令
 * @param {(exitcode:number,output:number)any} callback shell进程结束之后返回数据使用的回调函数
 * @param {number} timeLimit? （可选参数）命令运行的最长时限，单位为毫秒
 * @returns {boolean} 是否成功启动命令
 */
 static cmd(cmd,callback,timeLimit)

/**
 * 运行指定位置程序
 * @param {string} process 运行的程序路径（与命令行参数）
 * @param {(exitcode:number,output:number)any} callback 程序进程结束之后返回数据使用的回调函数
 * @param {number} timeLimit? （可选参数）程序进程运行的最长时限，单位为毫秒
 * @returns {boolean} 是否成功启动进程
 */
 static newProcess(process,callback,timeLimit)

/**
 * 获取当前时间字符串
 * @returns {string} 当前的时间字符串，使用当地时区和24小时制。
 */
 static getTimeStr()

/**
 * 获取当前的时间对象
 * @returns {TimeObject} 当前的时间对象
 */
 static getTimeObj()

/**
 * 随机生成一个 GUID 字符串
 * @returns {string} 一个随机生成的唯一标识符GUID
 */
 static randomGuid()  



}
