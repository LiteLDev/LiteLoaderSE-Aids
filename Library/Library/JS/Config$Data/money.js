/**
 * 💰 经济系统 API
 */ 
class money {
  
  
  


/**
 * 设置玩家的存款金额
 * @param {string} xuid 要操作的玩家的Xuid标识符
 * @param {number} money 要设置的金额
 * @returns {boolean} 是否设置成功
 */
 set(xuid,money)

/**
 * 获取玩家的存款金额
 * @param {string} xuid 要操作的玩家的Xuid标识符
 * @param {number} money 玩家的资金数值
 * @returns {number} 玩家的资金数值
 */
 get(xuid,money)

/**
 * 增加玩家的存款
 * @param {string} xuid 要操作的玩家的Xuid标识符
 * @param {number} money 要增加的金额
 * @returns {boolean} 是否设置成功
 */
 add(xuid,money)

/**
 * 减少玩家的存款
 * @param {string} xuid 要操作的玩家的Xuid标识符
 * @param {number} money 要减小的金额
 * @returns {boolean} 是否设置成功
 */
 reduce(xuid,money)

/**
 * 进行一笔转账
 * @param {string} xuid_plf 付款的玩家的Xuid标识符
 * @param {string} xuid_pl2 收款的玩家的Xuid标识符
 * @param {number} money 要支付的金额
 * @param {string} node? （可选参数）给这笔转账附加一些文字说明
 * @returns {boolean} 是否转账成功
 */
 trans(xuid_plf,xuid_pl2,money,node)

/**
 * 查询历史账单
 * @param {string} xuid 要操作的玩家的Xuid标识符
 * @param {number} time 查询从现在开始往前time秒的记录
 * @returns {ObjectTransHistory[]} 查询结果对象的数组
 */
 getHistory(xuid,time)

/**
 * 删除账单历史记录
 * @param {number} time 删除从现在开始往前time秒的记录
 * @returns {boolean} 是否删除成功
 */
 clearHistory(time)  



}
