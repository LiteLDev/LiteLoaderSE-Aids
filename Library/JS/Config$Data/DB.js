/**
 * 获取所有数据项名字
 */ 
class DB {
  
  
  


/**
 * 写入数据项
 * @param {string} name 数据项名字
 * @param {any} data 要写入的数据
 * @returns {boolean} 是否写入成功
 */
 set(name,data)

/**
 * 读取数据项
 * @param {string} name 数据项名字
 * @returns {any} 数据库中储存的这个项的数据
 */
 get(name)

/**
 * 删除数据项
 * @param {string} name 数据项名字
 * @returns {boolean} 是否成功删除
 */
 delete(name)

/**
 * 获取所有数据项名字
 * @returns {string[]} 所有的数据项名字数组
 */
 listKey()

/**
 * 关闭数据库
 * @returns {boolean} 是否成功关闭
 */
 close()  



}
