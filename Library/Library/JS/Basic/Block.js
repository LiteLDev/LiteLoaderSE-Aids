/**
 * 方块对象
 */ 
class Block {
  
/**
 * 游戏内显示的方块名称
 * @type String
 */ 
 name;
/**
 * 方块标准类型名	
 * @type String
 */ 
 type;
/**
 * 方块的游戏内id
 * @type Integer
 */ 
 id;
/**
 * 方块所在坐标
 * @type IntPos
 */ 
 pos;
  
  


/**
 * 获取方块对应的NBT对象
 * @returns {NbtCompound} 方块的NBT对象
 */
 getNbt()

/**
 * 写入方块对应的NBT对象
 * @param {NbtCompound} nbt NBT对象
 * @returns {boolean} 是否成功写入
 */
 setNbt(nbt)

/**
 * 获取方块的BlockState
方便函数，协助解析方块BlockState并转换为Object，方便读取与解析
等价于脚本执行block.getNbt().getTag("states").toObject()
 * @returns {Object} 方块的BlockState
 */
 getBlockState()

/**
 * 写入方块对应的NBT对象
 * @param {NbtCompound} nbt NBT对象
 * @returns {boolean} 是否成功写入
 */
 setNbt(nbt)

/**
 * 判断方块是否拥有容器
 * @returns {boolean} 这个方块是否拥有容器
 */
 hasContainer()

/**
 * 获取方块所拥有的容器对象
 * @returns {Container} 这个方块所拥有的容器对象
 */
 getContainer()

/**
 * 判断方块是否拥有方块实体
 * @returns {boolean} 这个方块是否拥有方块实体
 */
 hasBlockEntity()

/**
 * 获取方块所拥有的方块实体
 * @returns {BlockEntity} 这个方块所拥有的方块实体
 */
 getBlockEntity()

/**
 * 删除方块所拥有的方块实体
 * @returns {boolean} 是否成功删除
 */
 removeBlockEntity()  



}
