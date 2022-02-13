/**
 * 玩家对象
 */ 
class Player {
  
/**
 * 玩家名
 * @type String
 */ 
 name;
/**
 * 玩家所在坐标
 * @type FloatPos
 */ 
 pos;
/**
 * 玩家的真实名字
 * @type String
 */ 
 realName;
/**
 * 玩家Xuid字符串
 * @type String
 */ 
 xuid;
/**
 * 玩家Uuid字符串
 * @type String
 */ 
 uuid;
/**
 * 玩家的操作权限等级（0 - 4）
 * @type Integer
 */ 
 permLevel;
/**
 * 玩家的游戏模式（0 - 3
 * @type Integer
 */ 
 gameMode;
/**
 * 玩家最大生命值
 * @type Integer
 */ 
 maxHealth;
/**
 * 玩家当前生命值
 * @type Integer
 */ 
 health;
/**
 * 玩家当前是否悬空
 * @type Boolean
 */ 
 inAir;
/**
 * 玩家当前是否正在潜行
 * @type Boolean
 */ 
 sneaking ;
/**
 * 玩家当前速度
 * @type Float
 */ 
 speed;
/**
 * 玩家当前朝向（0 - 4）
 * @type Integer
 */ 
 direction;
/**
 * 玩家所在的方块坐标
 * @type IntPos
 */ 
 blockPos;
/**
 * 玩家当前是否在水中
 * @type Boolean
 */ 
 inWater;
  
  


/**
 * 判断玩家是否为OP
 * @returns {boolean} 玩家是否为OP
 */
 isOP()

/**
 * 断开玩家连接
 * @param {string} msg? （可选参数）被踢出玩家出显示的断开原因
 * @returns {boolean} 是否成功断开连接
 */
 kick(msg)

/**
 * 断开玩家连接
 * @param {string} msg? （可选参数）被踢出玩家出显示的断开原因
 * @returns {boolean} 是否成功断开连接
 */
 disconnect(msg)

/**
 * 发送一个文本消息给玩家
 * @param {string} msg 待发送的文本
 * @param {number} type? 发送的文本消息类型，默认为0
 * @returns {boolean} 是否成功发送
 */
 tell(msg,type)

/**
 * 发送一个文本消息给玩家
 * @param {string} msg 待发送的文本
 * @param {number} type? 发送的文本消息类型，默认为0
 * @returns {boolean} 是否成功发送
 */
 sendText(msg,type)

/**
 * 以某个玩家身份执行一条命令
 * @param {string} cmd 待执行的命令
 * @returns {boolean} 是否执行成功
 */
 runcmd(cmd)

/**
 * 传送玩家至指定位置
 * @param {FloatPos} pos 目标位置坐标 （或者使用x, y, z, dimid来确定玩家位置）
 * @returns {boolean} 是否成功传送
 */
 teleport(pos)

/**
 * 传送玩家至指定位置
 * @param {number} x x
 * @param {number} y y
 * @param {number} z z
 * @param {number} dimid dimid
 * @returns {boolean} 是否成功传送
 */
 teleport(x,y,z,dimid)

/**
 * 杀死玩家
 * @returns {boolean} 是否成功执行
 */
 kill()

/**
 * 使指定玩家着火
 * @param {number} time 着火时长，单位秒
 * @returns {boolean} 是否成功着火
 */
 setOnFire(time)

/**
 * 重命名玩家
 * @param {string} newname 玩家的新名字
 * @returns {boolean} 是否重命名成功
 */
 rename(newname)

/**
 * 获取玩家对应的设备信息对象
 * @returns {Device} 玩家对应的设备信息对象
 */
 getDevice()

/**
 * 获取玩家主手中的物品对象
 * @returns {Item} 玩家主手中的物品对象
 */
 getHand()

/**
 * 获取玩家副手的物品对象
 * @returns {Item} 玩家副手中的物品对象
 */
 getOffHand()

/**
 * 获取玩家物品栏的容器对象
 * @returns {Container} 玩家物品栏对应的容器对象
 */
 getInventory()

/**
 * 获取玩家盔甲栏的容器对象
 * @returns {Container} 玩家盔甲栏对应的容器对象
 */
 getArmor ()

/**
 * 获取玩家末影箱的容器对象
 * @returns {Container} 玩家末影箱对应的容器对象
 */
 getEnderChest()

/**
 * 给予玩家一个物品
 * @param {Item} item 给予的物品对象
 * @returns {boolean} 是否成功给予
 */
 giveItem(item)

/**
 * 清除玩家背包中所有指定类型的物品
 * @param {string} type 要清除的物品对象类型名
 * @returns {number} 清除的物品个数
 */
 clearItem(type)

/**
 * 刷新玩家所有物品
 * @returns {boolean} 是否成功刷新
 */
 refreshItems()

/**
 * 修改玩家操作权限
 * @param {number} level 目标操作权限等级
 * @returns {boolean} 是否成功修改
 */
 setPermLevel(level)

/**
 * 修改玩家游戏模式
 * @param {number} mode 目标游戏模式，0为生存模式，1为创造模式，2为极限模式
 * @returns {boolean} 是否成功修改
 */
 setGameMode(mode)

/**
 * 提高玩家经验等级
 * @param {number} count 要提升的经验等级
 * @returns {boolean} 是否设置成功
 */
 addLevel(count)

/**
 * 传送玩家至指定服务器
 * @param {string} server 目标服务器IP / 域名
 * @param {string} port 目标服务器端口
 * @returns {boolean} 是否成功传送
 */
 transServer(server,port)

/**
 * 使玩家客户端崩溃
 * @returns {boolean} 是否成功执行
 */
 crash()

/**
 * 设置玩家自定义侧边栏(暂时弃用)
 * @param {string} title 侧边栏标题
 * @param {<string,number>[]} data 侧边栏对象内容对象
 * @returns {boolean} 是否成功设置
 */
 setSidebar(title,data)

/**
 * 移除玩家自定义侧边栏
 * @returns {boolean} 是否成功移除
 */
 removeSidebar()

/**
 * 设置玩家看到的自定义Boss血条
 * @param {string} title 自定义血条标题
 * @param {number} percent 血条中的血量百分比，有效范围为0~100。0为空血条，100为满
 * @returns {boolean} 是否成功设置
 */
 setBossBar(title,percent)

/**
 * 移除玩家的自定义Boss血条
 * @returns {boolean} 是否成功移除
 */
 removeBossBar()

/**
 * 获取玩家对应的NBT对象
 * @returns {NbtCompound} 玩家的NBT对象
 */
 getNbt()

/**
 * 为玩家增加一个Tag
 * @param {string} tag 要增加的tag字符串
 * @returns {boolean} 是否设置成功
 */
 addTag(tag)

/**
 * 为玩家移除一个Tag
 * @param {string} tag 要移除的tag字符串
 * @returns {boolean} 是否移除成功
 */
 removeTag(tag)

/**
 * 获取玩家拥有的所有Tag列表
 * @returns {string[]} 玩家所有的 tag 字符串列表
 */
 getAllTags()

/**
 * 获取玩家的Abilities能力列表（来自玩家NBT）
 * @returns {<string,any>[]} 玩家所有能力信息的键 - 值对列表对象
 */
 getAbilities()

/**
 * 获取玩家的Attributes属性列表（来自玩家NBT）
 * @returns {Attributes[]} 玩家所有属性对象的数组
 */
 getAttributes()

/**
 * 检查玩家是否拥有某个Tag
 * @param {string} tag 要检查的tag字符串
 * @returns {boolean} 是否拥有这个Tag
 */
 hasTag(tag)

/**
 * 写入玩家对应的NBT对象
 * @param {NbtCompound} nbt NBT对象
 * @returns {boolean} 是否成功写入
 */
 setNbt(nbt)

/**
 * 向玩家发送模式表单，模式表单包含一个标题、一个文本显示框以及两个按钮
 * @param {string} title 表单标题
 * @param {string} content 表单内容
 * @param {string} button1 按钮1文本的字符串
 * @param {string} button2 按钮2文本的字符串
 * @param {(player:Player,id:number)void} callback 玩家点击按钮之后被调用的回调函数。
 * @returns {number} 发送的表单ID
 */
 sendModalForm(title,content,button1,button2,callback)

/**
 * 向玩家发送普通表单
普通表单包含一个标题、一个文本显示框以及若干按钮，可以设置按钮上显示的图标
 * @param {string} title 表单标题
 * @param {string} content 表单内容
 * @param {string[]} buttons 各个按钮文本的字符串数组
 * @param {string[]} images 各个按钮对应的图片路径
对于表单上的每个按钮，如下设置对应的图标
 1. 如果使用材质包路径，图片路径应该形如 textures/items/apple
 2. 如果使用URL路径，那么在这里放入完整的URL即可，形如 https://www.baidu.com/img/flexible/logo/pc/result.png
 3. 如果这个按钮你不需要显示图片，那将对应的图片路径设置为空字符串即可
 * @param {(player:Player,id:number)void} callback 玩家点击按钮之后被调用的回调函数
 * @returns {number} 发送的表单ID
 */
 sendSimpleForm(title,content,buttons,images,callback)

/**
 * 向玩家发送自定义表单（Json格式）
 * @param {string} json_data 自定义表单json字符串
 * @param {(player:Player,data:Array@any)void} callback 玩家提交表单之后被调用的回调函数。
 * @returns {number} 发送的表单ID
 */
 sendCustomForm(json_data,callback)

/**
 * 
 * @param {SimpleForm} form 配置好的表单对象
 * @param {(player:Player,id:null)} callback 玩家提交表单之后被调用的回调函数。
 * @returns {} 
 */
 sendForm(form,callback)

/**
 * 
 * @param {CustomForm} form 配置好的表单对象
 * @param {(player:Player,data:any[])} callback 玩家提交表单之后被调用的回调函数。
 * @returns {} 
 */
 sendForm(form,callback)

/**
 * 储存玩家绑定数据
 * @param {string} name 要储存到绑定数据的名字
 * @param {any} data 你要储存的绑定数据，可以是null
 * @returns {boolean} 是否成功储存
 */
 setExtraData(name,data)

/**
 * 获取玩家绑定数据
 * @param {string} name 要读取的绑定数据的名字
 * @returns {any} 储存的绑定数据
 */
 getExtraData(name)

/**
 * 删除玩家绑定数据
 * @param {string} name 要删除的绑定数据的名字
 * @returns {boolean} 是否删除成功
 */
 getExtraData(name)  



}
