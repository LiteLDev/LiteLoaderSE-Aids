/**
 * mc通用接口
 */ 
class mc {
    
  




/**
 * 生成一个浮点数坐标对象
 * @param {Float} x x 坐标
 * @param {Float} y y 坐标
 * @param {Float} z z 坐标
 * @param {number} dimid  维度ID：0 代表主世界，1 代表下界，2 代表末地
 * @returns {FloatPos} 一个浮点数坐标对象
 */
 static newFloatPos(x,y,z,dimid )

/**
 * 执行一条后台命令
 * @param {string} cmd 待执行的命令
 * @returns {boolean} 是否执行成功
 */
 static runcmd(cmd)

/**
 * 执行一条后台命令（强化版）
 * @param {string} cmd 指令内容
 * @returns {ObjectRuncmdEx} 命令执行结果Object
 */
 static runcmdEx(cmd)

/**
 * 通过方块坐标手动生成方块对象
通过此函数来手动生成对象，注意，你要获取的方块必须处于已被加载的范围中，否则会出现问题
 * @param {IntPos} pos 方块坐标对象（或者使用x, y, z, dimid来确定方块位置）
 * @returns {Block|null} 如返回值为 null 则表示获取方块失败
注意：不要长期保存一个方块对象
当方块对象对应的方块被销毁时，对应的方块对象将变得无效。因此，如果有长期操作某个方块的需要，请通过上述途径获取实时的方块对象
 */
 static getBlock(pos)

/**
 * 通过方块坐标手动生成方块对象
通过此函数来手动生成对象，注意，你要获取的方块必须处于已被加载的范围中，否则会出现问题
 * @param {number} x 方块x坐标
 * @param {number} y 方块y坐标
 * @param {number} z 方块z坐标
 * @param {number} dimid 方块维度
 * @returns {Block|null} 如返回值为 null 则表示获取方块失败
注意：不要长期保存一个方块对象
当方块对象对应的方块被销毁时，对应的方块对象将变得无效。因此，如果有长期操作某个方块的需要，请通过上述途径获取实时的方块对象
 */
 static getBlock(x,y,z,dimid)

/**
 * 设置指定位置的方块
 * @param {IntPos} pos 目标方块位置
 * @param {Block|string} block 要设置成的方块对象或者方块名
 * @returns {boolean} 是否成功设置
 */
 static setBlock(pos,block)

/**
 * 设置指定位置的方块
通过此函数，将一个坐标对应的方块设置成另一个，类似于命令 /setblock
如果使用方块名称，则方块名称须为标准类型名，且首字母大写，类似于 Stone
否则，函数将执行失败
 * @param {number} x 方块x坐标
 * @param {number} y 方块y坐标
 * @param {number} z 方块z坐标
 * @param {number} dimid 方块维度
 * @param {Block|string} block 要设置成的方块对象或者方块名
 * @returns {boolean} 是否成功设置
 */
 static setBlock(x,y,z,dimid,block)

/**
 * 在指定位置生成粒子效果
 * @param {IntPos} pos 目标方块位置
 * @param {string} type 要生成的粒子效果名称（可查阅wiki得知）
 * @returns {boolean} 是否成功生成
 */
 static spawnParticle(pos,type)

/**
 * 在指定位置生成粒子效果
 * @param {number} x 方块x坐标
 * @param {number} y 方块y坐标
 * @param {number} z 方块z坐标
 * @param {string} type 要生成的粒子效果名称（可查阅wiki得知）
 * @returns {boolean} 是否成功生成
 */
 static spawnParticle(x,y,z,type)

/**
 * 注册一个新的玩家命令
 * @param {string} cmd 待注册的命令
 * @param {string} description 命令描述文本
 * @param {(player:Player,args:Array@string)boolean} callback 注册的这个命令被执行时，接口自动调用的回调函数
 * @param {number} level （可选参数）命令的注册等级，默认为 0 ，即所有人都可以执行
 * @returns {boolean} 是否成功注册
 */
 static regPlayerCmd(cmd,description,callback,level)

/**
 * 注册一个新的后台控制台命令
 * @param {string} cmd 待注册的命令
 * @param {string} description 命令描述文本
 * @param {(args:Array@string)boolean} callback 注册的这个命令被执行时，接口自动调用的回调函数
 * @returns {boolean} 是否成功注册
 */
 static regConsoleCmd(cmd,description,callback)

/**
 * 模拟产生一个控制台命令输出
 * @param {string} output 模拟产生的命令输出
 * @returns {boolean} 是否成功执行
 */
 static sendCmdOutput(output)

/**
 * 获取一个玩家对象
 * @param {string} info 玩家的名字或者Xuid
 * @returns {Player} 生成的玩家对象
 */
 static getPlayer(info)

/**
 * 获取所有在线玩家的列表
 * @returns {Player[]} 在线的玩家对象列表
 */
 static getOnlinePlayers()

/**
 * 广播一个文本消息给所有玩家
 * @param {string} msg 待发送的文本
 * @param {number} type? 发送的文本消息类型，默认为0
 * @returns {boolean} 是否成功发送
 */
 static broadcast(msg,type)

/**
 * 设置指定位置的方块
 * @param {IntPos} pos 目标方块位置（或者使用x, y, z, dimid来确定方块位置）
 * @param {Block|string} block 要设置成的方块对象或者方块名
 * @returns {boolean} 是否成功设置
 */
 static setBlock(pos,block)

/**
 * 设置指定位置的方块
 * @param {number} x x
 * @param {number} y y
 * @param {number} z z
 * @param {number} dimid dimid
 * @param {Block|string} block 要设置成的方块对象或者方块名
 * @returns {boolean} 是否成功设置
 */
 static setBlock(x,y,z,dimid,block)

/**
 * 在指定位置生成粒子效果
 * @param {IntPos|FloatPos} pos 目标生成位置（或者使用x, y, z, dimid来确定方块位置）
 * @param {string} type 要生成的粒子效果名称（可查阅wiki得知）
 * @returns {boolean} 是否成功生成
 */
 static spawnParticle(pos,type)

/**
 * 在指定位置生成粒子效果
 * @param {number} x x
 * @param {number} y y
 * @param {number} z z
 * @param {number} dimid dimid
 * @param {string} type 要生成的粒子效果名称（可查阅wiki得知）
 * @returns {boolean} 是否成功生成
 */
 static spawnParticle(x,y,z,dimid,type)

/**
 * 在指定位置制造一次爆炸
 * @param {IntPos|FloatPos} pos 目标生成位置（或者使用x, y, z, dimid来确定方块位置）
 * @param {Entity} source 设置爆炸来源的实体对象，可以为`null
 * @param {Float} power 爆炸的威力值，影响爆炸的伤害大小和破坏范围
 * @param {Float} range 爆炸的范围半径，影响爆炸的波及范围
 * @param {boolean} isDestroy 爆炸是否破坏方块
 * @param {boolean} isFire 爆炸结束后是否留下燃烧的火焰
 * @returns {boolean} 是否成功制造爆炸
 */
 static explode(pos,source,power,range,isDestroy,isFire)

/**
 * 在指定位置制造一次爆炸
 * @param {number} x x
 * @param {number} y y
 * @param {number} z z
 * @param {number} dimid dimid
 * @param {Entity} source 设置爆炸来源的实体对象，可以为`null
 * @param {Float} power 爆炸的威力值，影响爆炸的伤害大小和破坏范围
 * @param {Float} range 爆炸的范围半径，影响爆炸的波及范围
 * @param {boolean} isDestroy 爆炸是否破坏方块
 * @param {boolean} isFire 爆炸结束后是否留下燃烧的火焰
 * @returns {boolean} 是否成功制造爆炸
 */
 static explode(x,y,z,dimid,source,power,range,isDestroy,isFire)

/**
 * 生成物品对象  
 * @param {string} name 物品的标准类型名，如`minecraft:bread`
 * @param {number} count 物品堆叠数量
 * @returns {Item} 生成的物品对象
如返回值为 `null` 则表示生成失败
 */
 static newItem(name,count)

/**
 * 生成物品对象  
 * @param {NbtCompound} nbt 生成物品对象所使用的物品NBT
 * @returns {Item} 生成的物品对象
如返回值为 `null` 则表示生成失败
 */
 static newItem(nbt)

/**
 * 生成一个整数类型坐标对象
 * @param {number} x x 坐标
 * @param {number} y y 坐标
 * @param {number} z z 坐标
 * @param {number} dimid  维度ID：0 代表主世界，1 代表下界，2 代表末地
 * @returns {IntPos} 整数坐标对象
 */
 static newIntPos(x,y,z,dimid )

/**
 * 生成新生物并获取
 * @param {string} name 生物的命名空间名称，如 minectaft:creeper
 * @param {IntPos} pos 生成生物的位置的坐标对象（或者使用x, y, z, dimid来确定生成位置）
 * @returns {Entity} 生成的实体对象，如返回值为 null 则表示生成失败
 */
 static spawnMob(name,pos)

/**
 * 生成新生物并获取
 * @param {string} name 
 * @param {Float} x 
 * @param {Float} y 
 * @param {Float} z 
 * @param {number} dimid 
 * @returns {Entity} 生成的实体对象，如返回值为 null 则表示生成失败
 */
 static spawnMob(name,x,y,z,dimid)

/**
 * 生成新生物并获取
 * @param {string} name 生物的命名空间名称，如 minectaft:creeper
 * @param {FloatPos} pos 生成生物的位置的坐标对象（或者使用x, y, z, dimid来确定生成位置）
 * @returns {Entity} 生成的实体对象，如返回值为 null 则表示生成失败
 */
 static spawnMob(name,pos)

/**
 * 创建一个新的计分项
 * @param {string} name 计分项名称
 * @param {string} displayName 计分项显示名称
 * @returns {Objective} 新增创建的计分项对象，如果返回null，则代表创建失败
 */
 static newScoreObjective(name,displayName)

/**
 * 获取某个已存在的计分项
 * @param {string} name 要获取的计分项名称
 * @returns {Objective} 对应的计分项对象，如果返回null，则代表计分项不存在
 */
 static getScoreObjective(name)

/**
 * 获取所有计分项
 * @returns {Array<Objective>} 计分板系统记录的所有计分项的对象数组
 */
 static getAllScoreObjectives()

/**
 * 移除一个已存在的计分项
 * @param {string} name 计分项名称
 * @returns {boolean} 是否移除成功
 */
 static removeScoreObjective(name)

/**
 * 获取某个处于显示状态的计分项
 * @param {string} slot 显示槽位名称字符串，可以为"sidebar"/"belowname"/"list"
 * @returns {Objective} 
 */
 static getDisplayObjectives(slot)

/**
 * 使计分项停止显示
 * @param {string} solt 显示槽位名称字符串，可以为"sidebar"/"belowname"/"list"
 * @returns {boolean} 
 */
 static clearDisplayObjective(solt)

/**
 * 设置服务器Motd字符串
 * @param {string} motd 目标Motd字符串
 * @returns {boolean} 是否设置成功
 */
 static setMotd(motd)

/**
 * 获取BDS服务端版本号
 * @returns {string} 服务端版本号字符串，格式形如v1.17.10
 */
 static getBDSVersion()




/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onPreJoin"} event 玩家开始连接服务器
 * @param {(player:Player)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onJoin"} event 玩家进入游戏（加载世界完成）
 * @param {(player:Player)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onLeft"} event 玩家离开游戏
 * @param {(player:Player)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onRespawn"} event 玩家重生
 * @param {(player:Player)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onPlayerDie"} event 玩家死亡
 * @param {(player:Player)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onPlayerCmd"} event 玩家执行命令
 * @param {(player:Player,cmd:string)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onChat"} event 玩家发送聊天信息
 * @param {(player:Player,msg:string)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onChangeDim"} event 玩家切换维度
 * @param {(player:Player)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onJump"} event 玩家跳跃
 * @param {(player:Player)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onSneak"} event 玩家切换潜行状态
 * @param {(player:Player,isSneaking:boolean)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onAttack"} event 玩家攻击实体
 * @param {(player:Player,entity:Entity)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onUseItem"} event 玩家使用物品
 * @param {(player:Player,item:Item)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onUseItemOn"} event 玩家对方块使用物品（点击右键）
 * @param {(player:Player,item:Item,block:Block)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onTakeItem"} event 玩家捡起物品
 * @param {(player:Player,entity:Entity)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onDropItem"} event 玩家丢出物品
 * @param {(player:Player,item:Item)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onEat"} event 玩家食用食物
 * @param {(player:Player,item:Item)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onStartDestroyBlock"} event 玩家开始破坏方块 / 点击左键
 * @param {(player:Player,block:Block)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onDestroyBlock"} event 玩家破坏方块完成
 * @param {(player:Player,block:Block)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onPlaceBlock"} event 玩家放置方块
 * @param {(player:Player,block:Block)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onOpenContainer"} event 玩家打开容器方块
 * @param {(player:Player,block:Block)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onCloseContainer"} event 玩家关闭容器方块
 * @param {(player:Player,block:Block)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onInventoryChange"} event 玩家物品栏变化
 * @param {(player:Player,slotNum:number,oldItem:Item,newItem:Item)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onMove"} event 玩家移动
 * @param {(player:Player,pos:FloatPos)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onSetArmor"} event 玩家改变盔甲栏
 * @param {(player:Player,slotNum:number,item:Item)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onUseRespawnAnchor"} event 玩家使用重生锚
 * @param {(player:Player,pos:IntPos)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onOpenContainerScreen"} event 玩家打开容器类GUI
 * @param {(player:Player)boolean} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onMobHurt"} event 生物受伤（包括玩家）
 * @param {(mob:Entity,source:Entity,damage:number)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onExplode"} event  发生由实体引起的爆炸
 * @param {(source:Entity,pos:FloatPos,power:Float,range:Float,isDestroy:boolean,isFire:boolean)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onProjectileHitEntity"} event 实体被弹射物击中
 * @param {(entity:Entity,source:Entity)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onWitherBossDestroy"} event 凋零破坏方块
 * @param {(witherBoss:Entity,AAbb:IntPos,aaBB:IntPos)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onRide"} event 生物骑乘
 * @param {(entity1:Entity,entity2:Entity)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onStepOnPressurePlate"} event 生物踩压力板
 * @param {(entity:Entity,pressurePlate:Block)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onSpawnProjectile"} event 弹射物创建
 * @param {(shooter:Entity,type:string)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onNpcCmd"} event NPC执行命令
 * @param {(npc:Entity,pl:Player)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onScoreChanged"} event 玩家计分板数值改变
 * @param {(player:Player,num:number,name:string,disName:string)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onFireSpread"} event 火焰蔓延
 * @param {(pos:IntPos)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onServerStarted"} event  服务器启动完毕
 * @param {} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onConsoleCmd"} event 服务端执行后台命令
 * @param {(cmd:string)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onConsoleOutput"} event 控制台产生命令输出
 * @param {(cmd:string)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onBlockInteracted"} event 方块接受玩家互动
 * @param {(player:Player,block:Block)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onBedExplode"} event 发生由床引起的爆炸
 * @param {(pos:IntPos)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onRespawnAnchorExplode"} event 发生由重生锚引起的爆炸
 * @param {(pos:IntPos,player:Player)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onBlockExploded"} event 方块被爆炸破坏
 * @param {(block:Block,source:Entity)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onCmdBlockExecute"} event  命令方块执行命令
 * @param {(cmd:string,pos:IntPos)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onContainerChange"} event 容器内容改变
 * @param {(player:Player,container:Block,slotNum:number,oldItem:Item,newItem:Item)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onProjectileHitBlock"} event 方块被弹射物击中
 * @param {(block:Block,source:Entity)function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onRedStoneUpdate"} event 发生红石更新
 * @param {(block:Block,level:number,isActive:boolean)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onHopperSearchItem"} event 漏斗（漏斗矿车）检测可否吸取物品
 * @param {(pos:FloatPos)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onHopperPushOut"} event 漏斗（漏斗矿车）输出物品
 * @param {(pos:FloatPos)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onPistonPush"} event 活塞推动
 * @param {(pistonPos:IntPos,block:Block)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onFarmLandDecay"} event 耕地退化
 * @param {(pos:IntPos,entity:Entity)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onUseFrameBlock"} event 操作物品展示框
 * @param {(player:Player,block:Block)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)

/**
 * 新增监听器
事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
 * @param {"onLiquidFlow"} event 液体方块流动
 * @param {(from:Block,to:IntPos)boolean|function} callback 事件回调
 * @returns {boolean} 是否添加成功
 */
 static listen(event,callback)




/**
 * 创建表单对象
 * @returns {CustomForm} 新创建的空白表单对象
 */
 static newCustomForm()

/**
 * 创建表单对象
 * @returns {SimpleForm} 新创建的空白表单对象
 */
 static newSimpleForm()  



}
