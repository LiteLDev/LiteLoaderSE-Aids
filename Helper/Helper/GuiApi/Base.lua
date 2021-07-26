
---向玩家发送模式表单
---@param title string 表单标题
---@param content string 表单内容
---@param button1 string 按钮1文本的字符串
---@param button2 string 按钮2文本的字符串
---@param callback fun(player : Player,id:number) 玩家点击按钮之后被调用的回调函数 
---@return number 发送的表单ID
function Player.sendModalForm(title,content,button1,button2,callback) end

---向玩家发送普通表单
---@param title string 表单标题
---@param content string 表单内容
---@param buttons {} 各个按钮文本的字符串数组
---@param images {} 各个按钮对应的图片路径
---@param callback  fun(player : Player,id:number) 玩家点击按钮之后被调用的回调函数 
---@return number 发送的表单ID
function Player.sendSimpleForm(title,content,buttons,images,callback) end

---向玩家发送自定义表单（Json格式）
---@param json string 自定义表单json字符串
---@param callback fun(player:Player,data:table)
---@return number 发送的表单ID
---回调函数返回的表单内容数组
---
---数组中中按表单上的控件顺序储存了每一个控件的内容
---
---如果data为Null，则代表玩家取消了表单
function Player.sendCustomForm(json,callback) end

---取消之前发送的表单
---@param id number 函数返回的表单ID
---@return boolean 是否成功取消
function mc.cancelForm(id) end

