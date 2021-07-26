
---方块对象
---@class Block
---@field name string 游戏内显示的方块名称
---@field trpe string 方块标准类型名
---@field id number 方块的游戏内id
---@field pos IntPos 方块所在坐标
Block ={}

---获取一个方块对象
---@param pos IntPos 方块坐标 对象
---@return Block 生成的方块对象
---如返回值为 nil 则表示获取方块失败
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Block)
---LiteXLoader 方块相关
function mc.getBlock(pos)end

---设置指定位置的方块
---@param pos IntPos 目标方块位置
---@param block Block|string 要设置成的方块对象或者方块名
---@return boolean 是否成功设置
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Block)
---LiteXLoader 方块相关
function mc.setBlock(pos,block) end

---在指定位置生成粒子效果
---@param pos IntPos 目标方块位置
---@param type string 要生成的粒子效果名称（可查阅wiki得知）
---@return boolean 是否成功生成
---[粒子wiki](https://minecraft.fandom.com/zh/wiki/%E7%B2%92%E5%AD%90)
---
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/GameAPI/Block)
---LiteXLoader 方块相关
function mc.spawnParticle(pos,type) end