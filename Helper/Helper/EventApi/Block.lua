---@alias BlockEvent
---|>'"onBlockInteractedonBlockExploded"'   # --- ' 方块接受玩家互动'
---| '"onBlockExploded"'   # --- '生方块被爆炸破坏'
---| '"onCmdBlockExecute"'   # --- ' 命令方块执行命令'
---| '"onProjectileHit"'   # --- '方块被弹射物击中'
---| '"onHopperSearchItem"'   # --- '漏斗（漏斗矿车）检测可否吸取物品'
---| '"onHopperPushOut"'   # --- '漏斗（漏斗矿车）输出物品'
---| '"onPistonPush"'   # --- ' 活塞推动'
---| '"onFarmLandDecay"'   # --- '耕地退化'

---新增监听器
---
---方块接受玩家互动
---@param event BlockEvent 要监听的事件名
---@param callback fun(player : Player,block : Block) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/BlockEvents)
---LiteXLoader 方块事件相关
function mc.listen(event,callback) end

---新增监听器
---
---方块被爆炸破坏
---@param event BlockEvent 要监听的事件名
---@param callback fun(block : Block,source : Entity) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/BlockEvents)
---LiteXLoader 方块事件相关
function mc.listen(event,callback) end

---新增监听器
---
---命令方块执行命令
---@param event BlockEvent 要监听的事件名
---@param callback fun(cmd : string,pos : IntPos) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/BlockEvents)
---LiteXLoader 方块事件相关
function mc.listen(event,callback) end

---新增监听器
---
---方块被弹射物击中
---@param event BlockEvent 要监听的事件名
---@param callback fun(block : Block,source : Entity) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/BlockEvents)
---LiteXLoader 方块事件相关
function mc.listen(event,callback) end

---新增监听器
---
---漏斗（漏斗矿车）检测可否吸取物品
---@param event BlockEvent 要监听的事件名
---@param callback fun(pos : FloatPos) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/BlockEvents)
---LiteXLoader 方块事件相关
function mc.listen(event,callback) end

---新增监听器
---
---活塞推动
---@param event BlockEvent 要监听的事件名
---@param callback fun(pistonPos : IntPos,block : Block) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/BlockEvents)
---LiteXLoader 方块事件相关
function mc.listen(event,callback) end

---新增监听器
---
---耕地退化
---@param event BlockEvent 要监听的事件名
---@param callback fun(pos : IntPos,entity : Entity) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/BlockEvents)
---LiteXLoader 方块事件相关
function mc.listen(event,callback) end