/**
 * 
 */ 
class NbtValue {
  
  
  


/**
 * 获取NBT对象储存的数据类型
 * @returns {} 此NBT对象储存的数据类型
 */
 getType()

/**
 * 将NBT对象转换为字符串
 * @param {number} space （可选参数）如果要格式化输出的字符串，则传入此参数
 * @returns {string} 对应的Json字符串
 */
 tostring(space)

/**
 * 清理此NBT对象
 * @returns {boolean} 是否成功清理
 */
 destroy()

/**
 * 设置对象的数据
 * @param {any} data 根据这个NBT对象的数据类型，写入对应类型的数据
 * @returns {boolean} 是否成功写入
 */
 set(data)

/**
 * 读取对象的数据
 * @returns {any} 对象中储存的数据
 */
 get()  



}
