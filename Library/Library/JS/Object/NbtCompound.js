/**
 * 
 */ 
class NbtCompound {
  
  
  


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
 * NBT对象序列化为SNBT
 * @returns {string} 对应的SNBT字符串
 */
 toSNBT()

/**
 * NBT对象序列化为二进制NBT
 * @returns {ByteBuffer} 对应的二进制NBT数据
 */
 toBinary()

/**
 * 清理此NBT对象
 * @returns {boolean} 是否成功清理
 */
 destroy()

/**
 * 设置某个下标位置的具体数据
 * @param {string} key 要操作的键名
 * @returns {NbtCompound} 写入完毕的NBT列表（便于连锁进行其他操作）
 */
 setEnd(key)

/**
 * 设置某个下标位置的具体数据
 * @param {string} key 要操作的键名
 * @param {any} data 要写入的具体数据
 * @returns {NbtCompound} 写入完毕的NBT对象（便于连锁进行其他操作）
 */
 setByte(key,data)

/**
 * 设置某个下标位置的具体数据
 * @param {string} key 要操作的键名
 * @param {any} data 要写入的具体数据
 * @returns {NbtCompound} 写入完毕的NBT对象（便于连锁进行其他操作）
 */
 setShort(key,data)

/**
 * 设置某个下标位置的具体数据
 * @param {string} key 要操作的键名
 * @param {any} data 要写入的具体数据
 * @returns {NbtCompound} 写入完毕的NBT对象（便于连锁进行其他操作）
 */
 setInt(key,data)

/**
 * 设置某个下标位置的具体数据
 * @param {string} key 要操作的键名
 * @param {any} data 要写入的具体数据
 * @returns {NbtCompound} 写入完毕的NBT对象（便于连锁进行其他操作）
 */
 setLong(key,data)

/**
 * 设置某个下标位置的具体数据
 * @param {string} key 要操作的键名
 * @param {any} data 要写入的具体数据
 * @returns {NbtCompound} 写入完毕的NBT对象（便于连锁进行其他操作）
 */
 setFloat(key,data)

/**
 * 设置某个下标位置的具体数据
 * @param {string} key 要操作的键名
 * @param {any} data 要写入的具体数据
 * @returns {NbtCompound} 写入完毕的NBT对象（便于连锁进行其他操作）
 */
 setDouble(key,data)

/**
 * 设置某个下标位置的具体数据
 * @param {string} key 要操作的键名
 * @param {any} data 要写入的具体数据
 * @returns {NbtCompound} 写入完毕的NBT对象（便于连锁进行其他操作）
 */
 setstring(key,data)

/**
 * 读取键对应的值的具体数据
 * @param {string} key 要操作的键名
 * @returns {any} 键对应的值的具体数据
 */
 getData(key)

/**
 * 将Compound类型转换为Object
 * @returns {Object} 对应的对象 / 表
 */
 toObject()  



}
