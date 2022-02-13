---玩家对象
---@class Player 
---@field name String String
---@field pos FloatPos FloatPos
---@field realName String String
---@field xuid String String
---@field uuid String String
---@field permLevel Integer Integer
---@field gameMode Integer Integer
---@field maxHealth Integer Integer
---@field health Integer Integer
---@field inAir Boolean Boolean
---@field sneaking  Boolean Boolean
---@field speed Float Float
---@field direction Integer Integer
---@field blockPos IntPos IntPos
---@field inWater Boolean Boolean
 Player = {}

---判断玩家是否为OP
---@return boolean 玩家是否为OP
function Player:isOP()
end

---断开玩家连接
---@param msg? string （可选参数）被踢出玩家出显示的断开原因
---@return boolean 是否成功断开连接
function Player:kick(msg)
end

---断开玩家连接
---@param msg? string （可选参数）被踢出玩家出显示的断开原因
---@return boolean 是否成功断开连接
function Player:disconnect(msg)
end

---发送一个文本消息给玩家
---@param msg string 待发送的文本
---@param type? number 发送的文本消息类型，默认为0
---@return boolean 是否成功发送
function Player:tell(msg,type)
end

---发送一个文本消息给玩家
---@param msg string 待发送的文本
---@param type? number 发送的文本消息类型，默认为0
---@return boolean 是否成功发送
function Player:sendText(msg,type)
end

---以某个玩家身份执行一条命令
---@param cmd string 待执行的命令
---@return boolean 是否执行成功
function Player:runcmd(cmd)
end

---传送玩家至指定位置
---@param pos FloatPos 目标位置坐标 （或者使用x, y, z, dimid来确定玩家位置）
---@return boolean 是否成功传送
function Player:teleport(pos)
end

---传送玩家至指定位置
---@param x number x
---@param y number y
---@param z number z
---@param dimid number dimid
---@return boolean 是否成功传送
function Player:teleport(x,y,z,dimid)
end

---杀死玩家
---@return boolean 是否成功执行
function Player:kill()
end

---使指定玩家着火
---@param time number 着火时长，单位秒
---@return boolean 是否成功着火
function Player:setOnFire(time)
end

---重命名玩家
---@param newname string 玩家的新名字
---@return boolean 是否重命名成功
function Player:rename(newname)
end

---获取玩家对应的设备信息对象
---@return Device 玩家对应的设备信息对象
function Player:getDevice()
end

---获取玩家主手中的物品对象
---@return Item 玩家主手中的物品对象
function Player:getHand()
end

---获取玩家副手的物品对象
---@return Item 玩家副手中的物品对象
function Player:getOffHand()
end

---获取玩家物品栏的容器对象
---@return Container 玩家物品栏对应的容器对象
function Player:getInventory()
end

---获取玩家盔甲栏的容器对象
---@return Container 玩家盔甲栏对应的容器对象
function Player:getArmor ()
end

---获取玩家末影箱的容器对象
---@return Container 玩家末影箱对应的容器对象
function Player:getEnderChest()
end

---给予玩家一个物品
---@param item Item 给予的物品对象
---@return boolean 是否成功给予
function Player:giveItem(item)
end

---清除玩家背包中所有指定类型的物品
---@param type string 要清除的物品对象类型名
---@return number 清除的物品个数
function Player:clearItem(type)
end

---刷新玩家所有物品
---@return boolean 是否成功刷新
function Player:refreshItems()
end

---修改玩家操作权限
---@param level number 目标操作权限等级
---@return boolean 是否成功修改
function Player:setPermLevel(level)
end

---修改玩家游戏模式
---@param mode number 目标游戏模式，0为生存模式，1为创造模式，2为极限模式
---@return boolean 是否成功修改
function Player:setGameMode(mode)
end

---提高玩家经验等级
---@param count number 要提升的经验等级
---@return boolean 是否设置成功
function Player:addLevel(count)
end

---传送玩家至指定服务器
---@param server string 目标服务器IP / 域名
---@param port string 目标服务器端口
---@return boolean 是否成功传送
function Player:transServer(server,port)
end

---使玩家客户端崩溃
---@return boolean 是否成功执行
function Player:crash()
end

---设置玩家自定义侧边栏(暂时弃用)
---@param title string 侧边栏标题
---@param data table<string,number> 侧边栏对象内容对象
---@return boolean 是否成功设置
function Player:setSidebar(title,data)
end

---移除玩家自定义侧边栏
---@return boolean 是否成功移除
function Player:removeSidebar()
end

---设置玩家看到的自定义Boss血条
---@param title string 自定义血条标题
---@param percent number 血条中的血量百分比，有效范围为0~100。0为空血条，100为满
---@return boolean 是否成功设置
function Player:setBossBar(title,percent)
end

---移除玩家的自定义Boss血条
---@return boolean 是否成功移除
function Player:removeBossBar()
end

---获取玩家对应的NBT对象
---@return NbtCompound 玩家的NBT对象
function Player:getNbt()
end

---为玩家增加一个Tag
---@param tag string 要增加的tag字符串
---@return boolean 是否设置成功
function Player:addTag(tag)
end

---为玩家移除一个Tag
---@param tag string 要移除的tag字符串
---@return boolean 是否移除成功
function Player:removeTag(tag)
end

---获取玩家拥有的所有Tag列表
---@return string[] 玩家所有的 tag 字符串列表
function Player:getAllTags()
end

---获取玩家的Abilities能力列表（来自玩家NBT）
---@return table<string,any>[] 玩家所有能力信息的键 - 值对列表对象
function Player:getAbilities()
end

---获取玩家的Attributes属性列表（来自玩家NBT）
---@return Attributes[] 玩家所有属性对象的数组
function Player:getAttributes()
end

---检查玩家是否拥有某个Tag
---@param tag string 要检查的tag字符串
---@return boolean 是否拥有这个Tag
function Player:hasTag(tag)
end

---写入玩家对应的NBT对象
---@param nbt NbtCompound NBT对象
---@return boolean 是否成功写入
function Player:setNbt(nbt)
end

---向玩家发送模式表单，模式表单包含一个标题、一个文本显示框以及两个按钮
---@param title string 表单标题
---@param content string 表单内容
---@param button1 string 按钮1文本的字符串
---@param button2 string 按钮2文本的字符串
---@param callback fun(player:Player,id:number):void 玩家点击按钮之后被调用的回调函数。
---@return number 发送的表单ID
function Player:sendModalForm(title,content,button1,button2,callback)
end

---向玩家发送普通表单
---普通表单包含一个标题、一个文本显示框以及若干按钮，可以设置按钮上显示的图标
---@param title string 表单标题
---@param content string 表单内容
---@param buttons string[] 各个按钮文本的字符串数组
---@param images string[] 各个按钮对应的图片路径
对于表单上的每个按钮，如下设置对应的图标
 1. 如果使用材质包路径，图片路径应该形如 textures/items/apple
 2. 如果使用URL路径，那么在这里放入完整的URL即可，形如 https://www.baidu.com/img/flexible/logo/pc/result.png
 3. 如果这个按钮你不需要显示图片，那将对应的图片路径设置为空字符串即可
---@param callback fun(player:Player,id:number):void 玩家点击按钮之后被调用的回调函数
---@return number 发送的表单ID
function Player:sendSimpleForm(title,content,buttons,images,callback)
end

---向玩家发送自定义表单（Json格式）
---@param json_data string 自定义表单json字符串
---@param callback fun(player:Player,data:{}@any):void 玩家提交表单之后被调用的回调函数。
---@return number 发送的表单ID
function Player:sendCustomForm(json_data,callback)
end

---
---@param form SimpleForm 配置好的表单对象
---@param callback fun(player:Player,id:nil): 玩家提交表单之后被调用的回调函数。
---@return  
function Player:sendForm(form,callback)
end

---
---@param form CustomForm 配置好的表单对象
---@param callback fun(player:Player,data:any[]): 玩家提交表单之后被调用的回调函数。
---@return  
function Player:sendForm(form,callback)
end

---储存玩家绑定数据
---@param name string 要储存到绑定数据的名字
---@param data any 你要储存的绑定数据，可以是nil
---@return boolean 是否成功储存
function Player:setExtraData(name,data)
end

---获取玩家绑定数据
---@param name string 要读取的绑定数据的名字
---@return any 储存的绑定数据
function Player:getExtraData(name)
end

---删除玩家绑定数据
---@param name string 要删除的绑定数据的名字
---@return boolean 是否删除成功
function Player:getExtraData(name)
end