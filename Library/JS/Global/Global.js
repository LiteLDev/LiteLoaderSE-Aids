




/**
 * 输出信息到控制台
这是为了方便输出信息而设计的便捷函数
 * @param {any} data1? 
 * @param {any} data2? 
 * @param {} data3? 
 * @returns {null} 
 */
 function log(data1,data2,data3)

/**
 * 输出带颜色文本
 * @param {string} color 此行输出的颜色
 * @param {any} data1? 
 * @param {any} data2? 
 * @returns {null} 
 */
 function colorLog(color,data1,data2)

/**
 * 推迟一段时间执行函数
 * @param {(:)any} func 待执行的函数
 * @param {number} msec 推迟执行的时间（毫秒）
 * @returns {number} 此任务ID
 */
 function setTimeout(func,msec)

/**
 * 推迟一段时间执行代码段（eval）
 * @param {string} code 待执行的代码段
 * @param {number} msec 推迟执行的时间（毫秒）
 * @returns {number} 此任务ID
 */
 function setTimeout(code,msec)

/**
 * 设置周期执行函数
 * @param {()any} func 待执行的函数
 * @param {number} msec 执行间隔周期（毫秒）
 * @returns {number} 此任务ID
 */
 function setInterval(func,msec)

/**
 * 设置周期执行代码段（eval）
 * @param {string} code 待执行的代码段
 * @param {number} msec 执行间隔周期（毫秒）
 * @returns {number} 此任务ID
 */
 function setInterval(code,msec)

/**
 * 取消延时 / 周期执行项
 * @param {number} timerid 由前几个函数返回的任务ID
 * @returns {boolean|null} 是否取消成功
 */
 function clearInterval(timerid)