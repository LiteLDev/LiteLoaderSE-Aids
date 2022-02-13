---自定义表单类型
---@class CustomForm 
 CustomForm = {}

---设置表单的标题
---@param text string 标题
---@return CustomForm 处理完毕的表单对象（便于连锁进行其他操作）
function CustomForm:setTitle(text)
end

---向表单内增加一行文本
---@param text string 一行文本
---@return CustomForm 处理完毕的表单对象（便于连锁进行其他操作）
function CustomForm:addLabel(text)
end

---向表单内增加一行输入框
---@param title string 输入框描述文本
---@param placeholder? string （可选参数）输入框内的提示字符
---@param defaultext? string （可选参数）输入框中默认存在的内容
---@return CustomForm 处理完毕的表单对象（便于连锁进行其他操作）
function CustomForm:addInput(title,placeholder,defaultext)
end

---向表单内增加一行开关选项
---@param title string 开关选项描述文本
---@param Default? boolean （可选参数）开关的默认状态 开 / 关
---@return CustomForm 处理完毕的表单对象（便于连锁进行其他操作）
function CustomForm:addSwitch(title,Default)
end

---向表单内增加一行下拉菜单
---@param title string 下拉菜单描述文本
---@param items string[] 下拉菜单中的选项文本列表
---@param Default? number 可选参数）下拉菜单默认选中的列表项序号。
---@return CustomForm 处理完毕的表单对象（便于连锁进行其他操作）
function CustomForm:addDropdown(title,items,Default)
end

---向表单内增加一行游标滑块
---@param title string 游标滑块描述文本
---@param min number 游标滑块最小值
---@param max number 游标滑块最大值
---@param step? number （可选参数）游标滑块调整的最小分度值，默认为1
---@param Default? number （可选参数）游标滑块默认初始格数，数值必须在最小和最大格数之间。
---@return CustomForm 处理完毕的表单对象（便于连锁进行其他操作）
function CustomForm:addSlider(title,min,max,step,Default)
end

---向表单内增加一行步进滑块
---@param title string 步进滑块描述文本
---@param items string[] 步进滑块的选项文本列表
---@param Default? number （可选参数）步进滑块默认初始选项。序号从0开始编号
---@return CustomForm 处理完毕的表单对象（便于连锁进行其他操作）
function CustomForm:addStepSlider(title,items,Default)
end