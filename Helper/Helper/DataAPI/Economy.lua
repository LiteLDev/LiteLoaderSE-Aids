---LLMoney对象
---@class money
money = {}

---设置玩家的存款金额
---@param xuid string 要操作的玩家的Xuid标识符
---@param money number 要设置的金额
---@return boolean 是否设置成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/Economy)
---LiteXLoader - 系统功能接口
function money.set(xuid, money) end

---获取玩家的存款金额
---@param xuid string 要读取的玩家的Xuid标识符
---@return number 玩家的资金数值
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/Economy)
---LiteXLoader - 系统功能接口
function money.get(xuid) end

---增加玩家的存款
---@param xuid string 要操作的玩家的Xuid标识符
---@param money number 要增加的金额
---@return boolean 是否设置成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/Economy)
---LiteXLoader - 系统功能接口
function money.add(xuid, money) end

---减少玩家的存款
---@param xuid string 要操作的玩家的Xuid标识符
---@param money number 要减小的金额
---@return boolean 是否设置成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/Economy)
---LiteXLoader - 系统功能接口
function money.reduce(xuid, money) end

---进行一笔转账
---@param xuid1 string 付款的玩家的Xuid标识符
---@param money number 要支付的金额
---@param xuid2 string 收款的玩家的Xuid标识符
---@param note string （可选参数）给这笔转账附加一些文字说明
---@return boolean 是否转账成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/Economy)
---LiteXLoader - 系统功能接口
function money.trans(xuid1, money, xuid2, note) end

--[[
---查询历史账单
---@param xuid string
---@param time number
---@return 
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/Economy)
---LiteXLoader - 系统功能接口
function money.() end ]]

---删除账单历史记录
---@param time number 删除从现在开始往前time秒的记录
---@return boolean 是否删除成功
---[文档](https://lxl.litetitle.com/#/zh_CN/Development/SystemAPI/Economy)
---LiteXLoader - 系统功能接口
function money.clearHistory(time) end