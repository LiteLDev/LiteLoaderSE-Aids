/**
 * 🎈 实体对象 API
在LXL中，使用「实体对象」来操作和获取某一个实体的相关信息。
 */ 
class Entity {
  
/**
 * 实体名称
 * @type String
 */ 
 name;
/**
 * 实体标准类型名
 * @type String
 */ 
 type;
/**
 * 实体的游戏内id
 * @type Integer
 */ 
 id;
/**
 * 实体所在坐标
 * @type FloatPos
 */ 
 pos;
/**
 * 实体所在的方块坐标
 * @type IntPos
 */ 
 blockPos;
/**
 * 实体最大生命值
 * @type Integer
 */ 
 maxHealth;
/**
 * 实体当前生命值
 * @type Integer
 */ 
 health;
/**
 * 实体当前是否悬空
 * @type Boolean
 */ 
 inAir;
/**
 * 实体当前速度
 * @type Float
 */ 
 speed;
/**
 * 实体当前是否在水中
 * @type Boolean
 */ 
 inWater;
  
  


/**
 * 传送实体至指定位置
 * @param {FloatPos} pos 目标位置坐标 （或者使用x, y, z, dimid来确定玩家位置）
 * @returns {boolean} 是否成功传送
 */
 teleport(pos)

/**
 * 传送实体至指定位置
 * @param {number} x x
 * @param {number} y y
 * @param {number} z z
 * @param {number} dimid dimid
 * @returns {boolean} 是否成功传送
 */
 teleport(x,y,z,dimid)

/**
 * 杀死指定实体 
 * @returns {boolean} 是否成功执行
 */
 kill()

/**
 * 使指定实体着火
 * @param {number} time 着火时长，单位秒
 * @returns {boolean} 是否成功着火
 */
 setOnFire(time)

/**
 * 判断一个实体对象是不是玩家
 * @returns {boolean} 当前实体对象是不是玩家
 */
 isPlayer()

/**
 * 将实体对象转换玩家对象
 * @returns {Player|null} 转换成的玩家对象
如果此实体对象指向的不是某个玩家，或者转换失败，则返回 `null`
 */
 toPlayer()

/**
 * 获取生物盔甲栏的容器对象  
 * @returns {Container} 此实体盔甲栏对应的容器对象
 */
 getArmor()

/**
 * 判断生物是否拥有容器（盔甲栏除外）
 * @returns {boolean} 个生物实体是否拥有容器
 */
 hasContainer()

/**
 * 获取生物所拥有的容器对象（盔甲栏除外）
 * @returns {Container} 这个生物实体所拥有的容器对象
 */
 getContainer()

/**
 * 为实体增加一个Tag
 * @param {string} tag 要增加的tag字符串
 * @returns {boolean} 是否设置成功
 */
 addTag(tag)

/**
 * 为实体移除一个Tag
 * @param {string} tag 要移除的tag字符串
 * @returns {boolean} 是否移除成功
 */
 removeTag(tag)

/**
 * 实体拥有的所有Tag列表
 * @returns {string[]} 实体所有的 tag 字符串列表
 */
 getAllTags()

/**
 * 检查实体是否拥有某个Tag
 * @param {string} tag 要检查的tag字符串
 * @returns {boolean} 是否拥有这个Tag
 */
 hasTag(tag)

/**
 * 获取实体对应的NBT对象
 * @returns {NbtCompound} 玩家的NBT对象
 */
 getNbt()

/**
 * 写入实体对应的NBT对象
 * @param {NbtCompound} nbt NBT对象
 * @returns {boolean} 是否成功写入
 */
 setNbt(nbt)

/**
 * 对实体造成伤害
注意，此处造成的伤害为真实伤害，无法被盔甲等保护装备减免
 * @param {number} damage 对实体造成的伤害数值
 * @returns {boolean} 是否造成伤害
 */
 hurt(damage)

/**
 * 刷新生物物品栏、盔甲栏
 * @returns {boolean} 
 */
 refreshItems()  



}
