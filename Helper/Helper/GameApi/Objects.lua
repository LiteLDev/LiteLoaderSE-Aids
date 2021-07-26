---@class FloatPos 玩家当前坐标对象
---@field x float x 坐标
---@field y float y 坐标
---@field z float z 坐标
---@field dim string 维度文字名	
---@field dimid float 维度ID
FloatPos = {}

---生成一个浮点数坐标对象
---@param x float x 坐标
---@param y float y 坐标
---@param z float z 坐标
---@param dimid dimid 维度ID
---@return FloatPos
function mc.newFloatPos(x,y,z,dimid) end


---@class IntPos
---@field x number x 坐标
---@field y number y 坐标
---@field z number z 坐标
---@field dim string 维度文字名	
---@field dimid number 维度ID

---生成一个浮点数坐标对象
---@param x number x 坐标
---@param y number y 坐标
---@param z number z 坐标
---@param dimid dimid 维度ID
---@return IntPos
function mc.newIntPos(x,y,z,dimid) end


---@class float 浮点型小数
float = {}

---@class ResTable
---@field success boolean 是否执行成功
---@field output string BDS执行命令后的输出结果
ResTable = {}

---@alias levelmode
---|>'0'   # --- '普通成员权限'
---| '1'   # --- 'OP权限'
---| '4'   # --- 'OP + 控制台权限'

---@alias msgtype
---|>'0'   # --- '普通消息（Raw）'
---| '1'   # --- '聊天消息（Chat）'
---| '5'   # --- '物品栏上方的消息（Tip）'
---| '9'   # --- 'Json格式消息（Json）'

---@alias gamemode
---|>'0'   # --- '生存模式'
---| '1'   # --- '创造模式'
---| '2'   # --- '极限模式'


---@alias dimid
---|>'0'   # --- '主世界'
---| '1'   # --- '下界'
---| '2'   # --- '末地'

