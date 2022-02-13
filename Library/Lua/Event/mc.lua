---mc通用接口
---@class mc 
 mc = {}

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onPreJoin"" 玩家开始连接服务器
---@param callback fun(player:Player):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onJoin"" 玩家进入游戏（加载世界完成）
---@param callback fun(player:Player):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onLeft"" 玩家离开游戏
---@param callback fun(player:Player):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onRespawn"" 玩家重生
---@param callback fun(player:Player):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onPlayerDie"" 玩家死亡
---@param callback fun(player:Player):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onPlayerCmd"" 玩家执行命令
---@param callback fun(player:Player,cmd:string):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onChat"" 玩家发送聊天信息
---@param callback fun(player:Player,msg:string):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onChangeDim"" 玩家切换维度
---@param callback fun(player:Player):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onJump"" 玩家跳跃
---@param callback fun(player:Player):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onSneak"" 玩家切换潜行状态
---@param callback fun(player:Player,isSneaking:boolean):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onAttack"" 玩家攻击实体
---@param callback fun(player:Player,entity:Entity):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onUseItem"" 玩家使用物品
---@param callback fun(player:Player,item:Item):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onUseItemOn"" 玩家对方块使用物品（点击右键）
---@param callback fun(player:Player,item:Item,block:Block):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onTakeItem"" 玩家捡起物品
---@param callback fun(player:Player,entity:Entity):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onDropItem"" 玩家丢出物品
---@param callback fun(player:Player,item:Item):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onEat"" 玩家食用食物
---@param callback fun(player:Player,item:Item):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onStartDestroyBlock"" 玩家开始破坏方块 / 点击左键
---@param callback fun(player:Player,block:Block):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onDestroyBlock"" 玩家破坏方块完成
---@param callback fun(player:Player,block:Block):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onPlaceBlock"" 玩家放置方块
---@param callback fun(player:Player,block:Block):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onOpenContainer"" 玩家打开容器方块
---@param callback fun(player:Player,block:Block):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onCloseContainer"" 玩家关闭容器方块
---@param callback fun(player:Player,block:Block):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onInventoryChange"" 玩家物品栏变化
---@param callback fun(player:Player,slotNum:number,oldItem:Item,newItem:Item):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onMove"" 玩家移动
---@param callback fun(player:Player,pos:FloatPos):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onSetArmor"" 玩家改变盔甲栏
---@param callback fun(player:Player,slotNum:number,item:Item):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onUseRespawnAnchor"" 玩家使用重生锚
---@param callback fun(player:Player,pos:IntPos):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onOpenContainerScreen"" 玩家打开容器类GUI
---@param callback fun(player:Player):boolean 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onMobHurt"" 生物受伤（包括玩家）
---@param callback fun(mob:Entity,source:Entity,damage:number):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onExplode""  发生由实体引起的爆炸
---@param callback fun(source:Entity,pos:FloatPos,power:Float,range:Float,isDestroy:boolean,isFire:boolean):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onProjectileHitEntity"" 实体被弹射物击中
---@param callback fun(entity:Entity,source:Entity):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onWitherBossDestroy"" 凋零破坏方块
---@param callback fun(witherBoss:Entity,AAbb:IntPos,aaBB:IntPos):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onRide"" 生物骑乘
---@param callback fun(entity1:Entity,entity2:Entity):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onStepOnPressurePlate"" 生物踩压力板
---@param callback fun(entity:Entity,pressurePlate:Block):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onSpawnProjectile"" 弹射物创建
---@param callback fun(shooter:Entity,type:string):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onNpcCmd"" NPC执行命令
---@param callback fun(npc:Entity,pl:Player):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onScoreChanged"" 玩家计分板数值改变
---@param callback fun(player:Player,num:number,name:string,disName:string):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onFireSpread"" 火焰蔓延
---@param callback fun(pos:IntPos):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onServerStarted""  服务器启动完毕
---@param callback  事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onConsoleCmd"" 服务端执行后台命令
---@param callback fun(cmd:string):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onConsoleOutput"" 控制台产生命令输出
---@param callback fun(cmd:string):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onBlockInteracted"" 方块接受玩家互动
---@param callback fun(player:Player,block:Block):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onBedExplode"" 发生由床引起的爆炸
---@param callback fun(pos:IntPos):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onRespawnAnchorExplode"" 发生由重生锚引起的爆炸
---@param callback fun(pos:IntPos,player:Player):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onBlockExploded"" 方块被爆炸破坏
---@param callback fun(block:Block,source:Entity):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onCmdBlockExecute""  命令方块执行命令
---@param callback fun(cmd:string,pos:IntPos):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onContainerChange"" 容器内容改变
---@param callback fun(player:Player,container:Block,slotNum:number,oldItem:Item,newItem:Item):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onProjectileHitBlock"" 方块被弹射物击中
---@param callback fun(block:Block,source:Entity):function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onRedStoneUpdate"" 发生红石更新
---@param callback fun(block:Block,level:number,isActive:boolean):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onHopperSearchItem"" 漏斗（漏斗矿车）检测可否吸取物品
---@param callback fun(pos:FloatPos):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onHopperPushOut"" 漏斗（漏斗矿车）输出物品
---@param callback fun(pos:FloatPos):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onPistonPush"" 活塞推动
---@param callback fun(pistonPos:IntPos,block:Block):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onFarmLandDecay"" 耕地退化
---@param callback fun(pos:IntPos,entity:Entity):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onUseFrameBlock"" 操作物品展示框
---@param callback fun(player:Player,block:Block):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end

---新增监听器
---事件系统让插件可以 响应 特定的游戏事件，让你可以在特定事件发生时执行代码
---@param event ""onLiquidFlow"" 液体方块流动
---@param callback fun(from:Block,to:IntPos):boolean|function 事件回调
---@return boolean 是否添加成功
function mc.listen(event,callback)
end