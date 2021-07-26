---@alias EntityrEvent
---|>'"onMobDie"'   # --- '生物死亡（包括玩家）'
---| '"onMobHurt"'   # --- '生物受伤（包括玩家）'
---| '"onExplode"'   # --- ' 发生爆炸'

---新增监听器
---
---生物死亡（包括玩家）
---@param event EntityrEvent 要监听的事件名
---@param callback fun(mob : Entity,source : Entity) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/EntityEvents)
---LiteXLoader 实体事件相关
function mc.listen(event,callback) end

---新增监听器
---
---生物受伤（包括玩家）
---@param event EntityrEvent 要监听的事件名
---@param callback fun(mob : Entity,source : Entity,damage : number) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/EntityEvents)
---LiteXLoader 实体事件相关
function mc.listen(event,callback) end

---新增监听器
---
---发生爆炸
---@param event EntityrEvent 要监听的事件名
---@param callback fun(source : Entity,pos : FloatPos) 注册的监听函数
---@return boolean 是否成功监听事件
---拦截事件只需
---```return false```
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/EventAPI/EntityEvents)
---LiteXLoader 实体事件相关
function mc.listen(event,callback) end