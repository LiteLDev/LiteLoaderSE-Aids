/**
 * 📮 方块实体对象 API
在LXL中，使用「方块实体对象」来操作和获取与特定方块关联的附加数据。
 */ 
class BlockEntity {
  
/**
 * 方块实体对应方块所在的坐标
 * @type IntPos
 */ 
 pos;
/**
 * 方块实体对象的类型ID
 * @type Integer
 */ 
 type;
  
  


/**
 * 获取方块实体对应的NBT对象
 * @returns {NbtCompound} 方块实体的NBT对象
 */
 getNbt()

/**
 * 写入方块实体对应的NBT对象
 * @param {NbtCompound} nbt 
 * @returns {boolean} 是否成功写入
 */
 setNbt(nbt)

/**
 * 获取方块实体对应的方块对象
 * @returns {Block} 方块实体对应的方块对象
 */
 getBlock()  



}
