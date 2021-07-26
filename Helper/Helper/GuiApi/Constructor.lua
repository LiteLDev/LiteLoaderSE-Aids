---@class SimpleForm 新创建的空白普通表单对象
SimpleForm = {}


---创建表单对象
---@return SimpleForm 新创建的空白普通表单对象
function mc.newSimpleForm() end

---设置表单的标题
---@param title string 表单的标题
---@return boolean 是否成功设置
function SimpleForm.setTitle(title) end

---设置表单的内容
---@param content string 表单的文本内容
---@return boolean 是否成功设置
function SimpleForm.setContent(content) end

---向表单内增加一行按钮
---@param text string 按钮文本的字符串
---@param image? string（可选参数）按钮图片所在路径
---@return boolean 是否成功设置
---如果使用材质包路径，图片路径应该形如 
---
---```textures/items/apple```
---
---如果使用URL路径，那么在这里放入完整的URL即可，形如 
---```https://www.baidu.com/img/flexible/logo/pc/result.png```
---
---如果这个按钮你不需要显示图片，那不传入此参数即可
function SimpleForm.addButton(text,image) end


---发送表单
---@param fm CustomForm|SimpleForm
---@param callback fun(player : Player,id:number) 玩家点击按钮之后被调用的回调函数
function Player.sendForm(fm,callback) end


---@class CustomForm 新创建的空白自定义表单对象
CustomForm = {}

---创建表单对象
---@return CustomForm 新创建的空白自定义表单对象
function mc.newCustomForm() end

---设置表单的标题
---@param title string 表单的标题
---@return boolean 是否成功设置
function CustomForm.setTitle(title) end

---向表单内增加一行文本
---@param text string 一行文本
---@return boolean 是否成功设置
function CustomForm.addLabel(text) end

---向表单内增加一行输入框
---@param title string 输入框描述文本
---@param placeholder? string （可选参数）输入框内的提示字符
---@param default? string （可选参数）输入框中默认存在的内容
---@return boolean 是否成功设置
function CustomForm.addInput(title,placeholder,default) end

---向表单内增加一行开关选项 
---@param title string 开关选项描述文本
---@param default? boolean (可选参数）开关的默认状态 开 / 关
---@return boolean 是否成功设置
function CustomForm.addSwitch(title,default) end

---向表单内增加一行下拉菜单
---@param title string 下拉菜单描述文本
---@param items {} 下拉菜单中的选项文本列表
---@param default? number (可选参数）默认选中的列表项序号
---@return boolean 是否成功设置
---序号从0开始编号。默认为0，即默认选中列表的第一项
function CustomForm.addDropdown(title,items,default) end

---向表单内增加一行游标滑块
---@param title string 游标滑块描述文本
---@param min number 游标滑块最小值
---@param max number 游标滑块最大值
---@param step? number （可选参数）最小分度值，默认为1
---@param default? number 游标滑块默认初始格数，数值必须在最小和最大格数之间
---默认为0，即滑块位于滑块行的开头
---@return boolean 是否成功设置
function CustomForm.addSlider(title,min,max,step,default) end

---向表单内增加一行步进滑块
---@param title string 步进滑块描述文本
---@param items {} 步进滑块的选项文本列表
---@param default? number （可选参数）步进滑块默认初始选项。序号从0开始编号
---默认为0，即滑块位于滑块行的开头
---@return boolean 是否成功设置
function CustomForm.addStepSlider(title,items,default) end