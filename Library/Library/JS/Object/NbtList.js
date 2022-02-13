/**
 * 
 */ 
class NbtList {
  
  
  


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
 * 获取列表长度
 * @returns {number} 此列表的长度
 */
 getSize()

/**
 * 获取某个下标位置储存的数据类型
 * @param {number} index 要查询的目标下标
 * @returns {any} 此坐标处储存的NBT的数据类型
 */
 getTypeOf(index)

/**
 * 设置某个下标位置的NBT对象
 * @param {number} index 要操作的目标下标
 * @param {any} tag 要写入的 NBT 对象（它承载着具体的NBT数据）。
写入对象的数据类型必须和下标位置储存的数据类型一致，且下标不能超出有效下标的最大值
 * @returns {NbtList} 写入完毕的NBT列表
 */
 setTag(index,tag)

/**
 * 读取某个下标位置的NBT对象
 * @param {any} index 要操作的目标下标
 * @returns {any} 下标位置的NBT对象。如果要读取的NBT不存在，将返回null
 */
 getTag(index)

/**
 * 往列表末尾追加一个NBT对象
 * @param {any} tag 要追加的 NBT 对象（它承载着具体的NBT数据）
 * @returns {NbtList} 追加完毕的NBT列表（便于连锁进行其他操作）
 */
 addTag(tag)

/**
 * 删除某个下标位置的NBT对象
 * @param {number} index 要删除的目标下标，
下标不能超出有效下标的最大值
 * @returns {NbtList} 处理完毕的NBT列表（便于连锁进行其他操作）
 */
 removeTag(index)

/**
 * 设置某个下标位置的具体数据
 * @param {number} index 要操作的目标下标
 * @returns {NbtList} 写入完毕的NBT列表（便于连锁进行其他操作）
 */
 setEnd(index)

/**
 * 设置某个下标位置的具体数据
 * @param {number} index 要操作的目标下标
 * @param {any} data 要写入的具体数据
 * @returns {NbtList} 写入完毕的NBT列表（便于连锁进行其他操作）
 */
 setByte(index,data)

/**
 * 设置某个下标位置的具体数据
 * @param {number} index 要操作的目标下标
 * @param {any} data 要写入的具体数据
 * @returns {NbtList} 写入完毕的NBT列表（便于连锁进行其他操作）
 */
 setShort(index,data)

/**
 * 设置某个下标位置的具体数据
 * @param {number} index 要操作的目标下标
 * @param {any} data 要写入的具体数据
 * @returns {NbtList} 写入完毕的NBT列表（便于连锁进行其他操作）
 */
 setInt(index,data)

/**
 * 设置某个下标位置的具体数据
 * @param {number} index 要操作的目标下标
 * @param {any} data 要写入的具体数据
 * @returns {NbtList} 写入完毕的NBT列表（便于连锁进行其他操作）
 */
 setLong(index,data)

/**
 * 设置某个下标位置的具体数据
 * @param {number} index 要操作的目标下标
 * @param {any} data 要写入的具体数据
 * @returns {NbtList} 写入完毕的NBT列表（便于连锁进行其他操作）
 */
 setFloat(index,data)

/**
 * 设置某个下标位置的具体数据
 * @param {number} index 要操作的目标下标
 * @param {any} data 要写入的具体数据
 * @returns {NbtList} 写入完毕的NBT列表（便于连锁进行其他操作）
 */
 setDouble(index,data)

/**
 * 设置某个下标位置的具体数据
 * @param {number} index 要操作的目标下标
 * @param {any} data 要写入的具体数据
 * @returns {NbtList} 写入完毕的NBT列表（便于连锁进行其他操作）
 */
 setstring(index,data)

/**
 * 读取某个下标位置的具体数据
 * @param {number} index 要操作的目标下标
 * @returns {any} 指定位置储存的具体数据
 */
 getData(index)

/**
 * 将NbtList类型转换为Array
 * @returns {any[]} 对应的数组 / 列表
 */
 toArray()  



}
