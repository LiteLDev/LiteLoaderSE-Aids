/**
 * NBT
 */ 
class NBT {
  
/**
 * NbtValue
 * @type NbtValue
 */ 
 static End;
/**
 * NbtValue
 * @type NbtValue
 */ 
 static Byte;
/**
 * NbtValue
 * @type NbtValue
 */ 
 static Short;
/**
 * NbtValue
 * @type NbtValue
 */ 
 static Int;
/**
 * NbtValue
 * @type NbtValue
 */ 
 static Long;
/**
 * NbtValue
 * @type NbtValue
 */ 
 static Float;
/**
 * NbtValue
 * @type NbtValue
 */ 
 static Double;
/**
 * ByteArray
 * @type NbtValue
 */ 
 static ByteArray;
/**
 * NbtValue
 * @type NbtValue
 */ 
 static String;
/**
 * NbtList
 * @type NbtList
 */ 
 static List;
/**
 * NbtCompound
 * @type NbtCompound
 */ 
 static Compound;
  
  


/**
 * 根据你提供的数据，来创建新的NBT对象
 * @param {NbtValue} type 你要创建的NBT对象的数据类型
 * @param {any} data 根据你要创建的对象类型设置初始数据
 * @returns {NbtValue} 生成的NBT对象
 */
 static createTag(type,data)

/**
 * 从 SNBT 字符串生成 NBT 对象
 * @param {string} snbt 你要解析的SNBT字符串
 * @returns {NbtCompound} 生成的NBT对象
 */
 static parseSNBT(snbt)

/**
 * 从二进制 NBT 数据生成 NBT 对象
 * @param {ByteBuffer} nbt 你要解析的二进制 NBT 数据
 * @returns {NbtCompound} 生成的NBT对象
 */
 static parseBinaryNBT(nbt)

/**
 * 根据你提供的数据，来创建新的NBT对象
 * @param {NbtList} type 你要创建的NBT对象的数据类型
 * @param {any} data 根据你要创建的对象类型设置初始数据
 * @returns {NbtList} 生成的NBT对象
 */
 static createTag(type,data)

/**
 * 根据你提供的数据，来创建新的NBT对象
 * @param {NbtCompound} type 你要创建的NBT对象的数据类型
 * @param {any} data 根据你要创建的对象类型设置初始数据
 * @returns {NbtCompound} 生成的NBT对象
 */
 static createTag(type,data)  



}
