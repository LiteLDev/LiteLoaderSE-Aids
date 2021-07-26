---@alias playerEvent
---|>'"onPreJoin"'   # --- '玩家开始连接服务器'
---| '"onJoin"'   # --- '玩家进入游戏（加载世界完成）'
---| '"onLeft"'   # --- ' 玩家离开游戏'
---| '"onRespawn"'   # --- '玩家重生'
---| '"onPlayerCmd"'   # --- '玩家执行命令'
---| '"onChat"'   # --- '玩家发送聊天信息'
---| '"onChangeDim"'   # --- '玩家切换维度'
---| '"onJump"'   # --- '玩家跳跃'
---| '"onSneak"'   # --- '玩家切换潜行状态'
---| '"onAttack"'   # --- '玩家攻击实体'
---| '"onUseItem"'   # --- '玩家使用物品'
---| '"onUseItemOn"'   # --- '玩家对方块使用物品（点击右键）'
---| '"onTakeItem"'   # --- '玩家捡起物品'
---| '"onDropItem"'   # --- '玩家丢出物品'
---| '"onEat"'   # --- '玩家食用食物'
---| '"onDestroyingBlock"'   # --- '玩家正在破坏方块 / 点击左键'
---| '"onDestroyBlock"'   # --- '玩家破坏方块完成'
---| '"onPlaceBlock"'   # --- '玩家放置方块'
---| '"onOpenContainer"'   # --- '玩家打开容器方块'
---| '"onCloseContainer"'   # --- ' 玩家关闭容器方块'
---| '"onContainerChangeSlot"'   # --- '玩家向容器放入 / 取出物品'
---| '"onMove"'   # --- '玩家移动'
---| '"onSetArmor"'   # --- '玩家改变盔甲栏'
---| '"onUseRespawnAnchor"'   # --- '玩家使用重生锚'


---新增监听器
---
---加入，退出等回调
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end

---新增监听器
---
---指令执行回调
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player,cmd:string) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end

---新增监听器
---
---聊天回调
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player,msg:string) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end

---新增监听器
---
---潜行切换回调
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player,isSneaking:boolean) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end

---新增监听器
---
---生物相关回调
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player,entity:Entity) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end

---新增监听器
---
---物品相关回调
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player,item:Item) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end

---新增监听器
---
---玩家对方块使用物品回调
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player,item:Item,block:Block) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end

---新增监听器
---
---方块相关回调
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player,block:Block) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end

---新增监听器
---
--- 玩家向容器放入 / 取出物品
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player,container:Block,slotNum:number,isPutin:boolean,item:Item) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end

---新增监听器
---
---玩家对方块使用物品（点击右键）
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player,item:Item,block:Block) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end

---新增监听器
---
---玩家移动
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player,pos:FloatPos) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end

---新增监听器
---
---玩家改变盔甲栏
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player,slotNum:number,item:Item) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end

---新增监听器
---
---玩家使用重生锚
---@param event playerEvent 要监听的事件名
---@param callback fun(player:Player,pos:IntPos) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/PlayerEvents)
---LiteXLoader 玩家事件相关
function mc.listen(event,callback) end